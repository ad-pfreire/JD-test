# 🎯 MarsAir – Test Cases Manuales & Automatizados


## 🧪 **Test Cases MANUALES** (valor exploratorio / visual)

---

 🧩 **M1. Presencia y estado de la UI (Smoke visual)**
- 🎯 **Objetivo:** Confirmar que el formulario carga correctamente.  
- 🪜 **Pasos:**  
  1. Abrir el home.  
  2. Verificar que los campos **Departing**, **Returning**, **Promo Code** y el botón **Search** sean visibles y estén habilitados.  
- ✅ **Esperado:** Todos los controles visibles, activos y sin errores en consola.  
- 💬 **Por qué manual:** Es una verificación visual de layout, rápida y sin necesidad de automatizar.  

---

 🧩 **M2. Opciones válidas en los selects**
- 🪜 **Pasos:** Abrir listas de **Departing** y **Returning**.  
- ✅ **Esperado:** Solo deben aparecer las opciones:  
  `July`, `December`, `July (next year)`, `December (next year)`, `July (two years from now)`, `December (two years from now)`  
- 💬 **Por qué manual:** Confirmación visual/UX. Se automatizaría solo si el catálogo cambia con frecuencia.  

---

🧩 **M3. Mensajes y redacción**
- 🪜 **Pasos:** Ejecutar una búsqueda válida e inválida y observar los mensajes.  
- ✅ **Esperado:**  
  - Éxito → “Seats available! Call 0800 MARSAIR to book!”  
  - Error → “Unfortunately, this schedule is not possible. Please try again.”  
- 💬 **Por qué manual:** Revisión de redacción, ortografía y UX visual.  

---

🧩 **M4. Link “Book a ticket…” prominente (Home)**
- 🪜 **Pasos:** Verificar visibilidad y posición del texto en el home.  
- ✅ **Esperado:** Texto **visible** y en un lugar destacado.  
- 💬 **Por qué manual:** Evaluación visual de jerarquía y UX.  
> 📝 **Nota:** Si el texto **no aparece** en resultados o **no es clickeable**, repórtalo como bug.

---

## 🤖 **Test Cases AUTOMATIZADOS** (prioridad alta)

---

 ⚙️ **Criterio de selección**
> Reglas de negocio **repetitivas**, **determinísticas** y **de alto valor** para regresión funcional.

---

🚀 **A1. Happy Path – Búsqueda válida (Rule 1)**
- 🧮 **Datos:** Departing = July, Returning = July (next year)  
- 🪜 **Pasos:** Seleccionar → clic en **Search**  
- ✅ **Esperado:** Aparece “Seats available!”  
- 💬 **Valor:** Valida el flujo básico principal del sistema.  

---

🚀 **A2. Límite de 2 años (Rule 1)**
- 🧮 **Datos:** Departing = July, Returning = July (two years from now)  
- ✅ **Esperado:** Resultado válido (dentro del rango permitido).  
- 💬 **Valor:** Prueba el borde superior de la lógica de fechas.  

---

🚫 **A3. Fechas inválidas – mismo año (Rule 4)**
- 🧮 **Datos:** July → December (mismo año)  
- ✅ **Esperado:** Error “Unfortunately, this schedule is not possible.”  
- 💬 **Valor:** Valida la regla de negocio de 12 meses mínimos.  

---

🚫 **A4. Fechas inválidas – cruce de año (<12 meses)**
- 🧮 **Datos:** December → July (next year)  
- ✅ **Esperado:** Mensaje de error por retorno menor a un año.  
- 💬 **Valor:** Edge case crítico de validación.  

---

💸 **A5. Promo Code válido 30% (Rule 2)**
- 🧮 **Datos:** AF3-FJK-418 (3 + 4 + 1 = 8 → válido)  
- ✅ **Esperado:** “Promotional code AF3-FJK-418 used: 30% discount!”  
- 💬 **Valor:** Verifica formato y cálculo del check digit.  

---

❌ **A6. Promo Code inválido (Rule 2)**
- 🧮 **Datos:** AF3-FJK-419 (check incorrecto)  
- ✅ **Esperado:** “Sorry, code AF3-FJK-419 is not valid.”  
- 💬 **Valor:** Comprueba manejo de errores en códigos inválidos.  

---

🧩 **A7. Múltiples descuentos dinámicos (Rule 2)**
- 🧮 **Datos:** Códigos con primer dígito 2 / 5 / 9 → 20%, 50%, 90%  
- ✅ **Esperado:** El mensaje refleja el % correcto.  
- 💬 **Valor:** Prueba data-driven, evita errores de cálculo o mapeo.  

---

🏠 **A8. Navegación – texto “Book a ticket…” (Rule 3)**
- ⚙️ **Precondición:** Estar en resultados (ejecutar A1).  
- 🪜 **Acción:** Clic en “Book a ticket to the red planet now!”  
- ✅ **Esperado:** Redirige a Home (formulario visible).  
- 💬 **Valor:** Verifica retorno al flujo principal (conversión).  

---

 🏠 **A8. Navegación – texto “Book a ticket…” (Rule 3)**
- ⚙️ **Precondición:** Estar en resultados (ejecutar A1).  
- 🪜 **Acción:** Clic en “Book a ticket to the red planet now!”  
- ✅ **Esperado:** Redirige a Home (formulario visible).  
- 💬 **Valor:** Verifica retorno al flujo principal (conversión).  

---

 🏠 **A9. Navegación – Logo a Home (Rule 3)**
- ⚙️ **Precondición:** Estar en resultados.  
- 🪜 **Acción:** Clic en el logo “MarsAir”.  
- ✅ **Esperado:** Redirige correctamente al Home.  
- 💬 **Valor:** Consistencia de navegación global.  

---

## 🗣️ **Cómo defender tu decisión (Manual vs Automático)**

---

 👀 **Manual**
- UI / Visual  
- Prominencia de textos  
- Ortografía y mensajes  
- Catálogo visible  

🗨️ *“Esto lo reviso manualmente porque es percepción visual y cambia poco. Automatizarlo implicaría mantenimiento innecesario.”*

---

⚙️ **Automatizado**
- Reglas de negocio determinísticas y repetitivas:
  - ✅ Fechas (≥ 12 meses)
  - ✅ Promocodes (formato + check digit + %)
  - ✅ Navegación al Home

🗨️ *“Esto lo automatizo porque protege regresión, es crítico para el negocio y me da feedback rápido en cada cambio.”*

---

✨ **Consejo para la entrevista:**
> Cuando empieces a hablar de tus pruebas, no digas solo *qué* hiciste, sino *por qué*.  
> Ejemplo:  
> “Automatizo esto porque si mañana cambian los valores de fechas o el formato del código, quiero detectar la regresión sin esfuerzo manual.”

---

