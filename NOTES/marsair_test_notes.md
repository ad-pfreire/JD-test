 # 🧩 MarsAir QA Notes (End-to-End Testing Flow)

## 📘 Contexto General
MarsAir es una aplicación web que simula un portal de reservas de vuelos a Marte.  
El objetivo del QA es validar las reglas de negocio implementadas en la interfaz y la lógica de validación interna.  
El alcance está definido por las **4 historias de usuario** del *Problem Definition* entregado por ThoughtWorks.

---

## 🧠 Estrategia de Pruebas !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
El enfoque seguido se basa en el ciclo completo de calidad:

1. **Análisis de requerimientos** – entender las reglas de negocio antes de probar.  
2. **Exploratory & Smoke Testing** – confirmar que la app carga y los flujos principales funcionan.  
3. **Reporte de bugs** – documentar hallazgos funcionales y visuales.  
4. **Diseño de casos de prueba** – definir qué probar manual y qué automatizar.  
5. **Automatización con Cypress** – validar las reglas críticas de negocio con feedback rápido.  
6. **Revisión y comunicación** – sugerir mejoras o siguientes pasos.

---

## 🔍 Fase 1 – Exploratory / Smoke Testing

**Objetivo:**  
Ejecutar una exploración rápida para entender el flujo, detectar !!!!!errores evidentes!!!!!! y validar la presencia de los elementos clave (inputs, botones, mensajes, etc).

**Acciones realizadas:**
- Confirmar carga de la aplicación: campos `departure`, `return`, `promo code` y botón **Search** visibles.
- Ejecutar flujos con combinaciones válidas e inválidas.
- Observar mensajes mostrados en pantalla.

**Resultado:**  
La aplicación responde, pero se identifican problemas de validación en fechas y códigos promocionales.

---

## 🐞 Fase 2 – Identificación de Bugs

### Principales hallazgos
- **[BUG-001] Retorno en el pasado:** permite seleccionar `returning` anterior al `departing`.  
- **[BUG-002] Texto “Book a ticket…” no clickeable** y ausente en la página de resultados.  
- **[BUG-003] Validación de promo code inexistente:** acepta cualquier formato.  
- **[BUG-004] Fechas límite no controladas:** `December → July (next year)` no genera error.  
- **[BUG-005] Campos vacíos:** sin mensaje de error o feedback visual.

📄 Todos los bugs están documentados en `marsair_bugs_summary.md`.

---------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 🧪 Fase 3 – Diseño de Casos de Prueba

### Objetivo
Diseñar casos de prueba basados en las reglas de negocio (1–4), priorizando:
- Cobertura funcional
- Casos borde (edge cases)
- Valor de automatización

---

### 🚀 Regla #1 – Basic Search Flow

**Acceptance Criteria:**
- Campos “departure” y “return” visibles.
- Vuelos cada seis meses (July / December).
- Búsquedas permitidas hasta 2 años en el futuro.
- Mensajes según disponibilidad.

#### 🔍 Pruebas manuales
- Combinaciones válidas e inválidas de fechas.  
- Validar que los mensajes correspondan a la selección.

#### ⚠️ Bugs detectados
- Se permite un retorno menor al departure.
- No hay validación si se elige el mismo mes (ej. July → July).

#### 🧪 Casos automatizables
1. July → July (next year) → “Seats available!”  
2. July → December (mismo año) → “Unfortunately, this schedule…”  

---

### 🚀 Regla #2 – Promotional Codes

**Acceptance Criteria:**
- Formato: `XX9-XXX-999`
- Primer número = descuento (2=20%, 3=30%, etc.)
- Último dígito = suma de los anteriores mod 10
- Mensajes correctos para códigos válidos o inválidos.

#### 🔍 Pruebas manuales
- Ingreso de códigos válidos e inválidos.

#### ⚠️ Bugs detectados
- No hay validación inmediata ni retroalimentación visual.
- Descuento mostrado no corresponde siempre al código.

#### 🧪 Casos automatizables
1. AF3-FJK-418 → válido, 30%.  
2. JJ5-OPQ-320 → válido, 50%.  
3. AF3-FJK-419 → inválido.  
4. AA1-BBB-111 → formato incorrecto.

---

### 🚀 Regla #3 – Link to Home Page

**Acceptance Criteria:**
- Texto “Book a ticket to the red planet now!” visible y clickeable.  
- El logo “MarsAir” debe llevar al home desde cualquier página.

#### 🔍 Pruebas manuales
- Comprobado texto visible en el home.
- Revisado logo.

#### ⚠️ Bugs detectados
- Texto no tiene link activo.
- No aparece en la página de resultados.

#### 🧪 Casos automatizables
1. Clic en “Book a ticket…” → vuelve al home.  
2. Clic en el logo → vuelve al home.

---

### 🚀 Regla #4 – Invalid Return Dates

**Acceptance Criteria:**
Mostrar mensaje de error cuando la fecha de retorno sea menor a 1 año del departure.

#### 🔍 Pruebas manuales
- Combinaciones July / December / next year / two years.

#### ⚠️ Bugs detectados
- December → July (next year) no genera error.
- No hay mensaje si los campos están vacíos.

#### 🧪 Casos automatizables
1. July → December (mismo año) → error.  
2. July → July (next year) → válido.  
3. December → July (next year) → error.  

---

## 🤖 Fase 4 – Automatización (Cypress)

**Objetivo:**  
Implementar pruebas de regresión rápida que cubran las validaciones funcionales críticas.

**Ventajas de Cypress (vs Playwright):**
- Auto-wait nativo → evita flakiness.  
- Grabación visual y screenshots automáticos.  
- Ejecución paralela y feedback rápido.  
- Sintaxis más intuitiva (JS, familiar para QA web).  

**Specs sugeridos:**
- `smoke.cy.js` → flujo feliz.  
- `dates.cy.js` → validación de fechas.  
- `promo.cy.js` → promo codes.  
- `navigation.cy.js` → links al home.

---

## 📊 Fase 5 – Comunicación y Mejora Continua

**Conclusiones:**
- App cumple con flujo base, pero carece de validaciones de negocio sólidas.
- UX puede mejorar (feedback inmediato y navegación intuitiva).

**Próximos pasos sugeridos:**
1. Validaciones en cliente (JS) para fechas y promo code.  
2. Agregar mensajes de error consistentes.  
3. Pruebas visuales y accesibilidad básica.  
4. Automatizar la regresión principal.

---

✍️ **QA Responsible:** Paul Freire  
🗓️ **Fecha:** [Actualízala antes de la entrevista]  
🧰 **Herramienta:** Cypress + JavaScript  
🌐 **URL:** https://marsair.recruiting.thoughtworks.net/


