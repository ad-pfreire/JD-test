# 🐞 MarsAir – Bugs Identificados (Exploratory Testing)

## 🧩 Contexto
Lista de los bugs encontrados durante la fase exploratoria del Problem Definition de MarsAir, antes de la automatización con Cypress.

---

### 🪲 Bug 001 – Retorno en el pasado
**Descripción:**  
El sistema permite seleccionar una fecha de retorno anterior a la de salida, por ejemplo:  
Departing: December (two years from now)  
Returning: July (actual).  
Esto genera un viaje inválido.

**Tipo:** Lógica / Negocio  
**Estado:** Pendiente  

---

### 🪲 Bug 002 – Texto “Book a ticket…” no clickeable
**Descripción:**  
El texto “Book a ticket to the red planet now!” aparece en el home, pero no es clickeable ni lleva al home page.  
Además, no aparece en la página de resultados, por lo que el usuario no tiene una forma rápida de volver al inicio.

**Tipo:** Navegación / UX  
**Estado:** Pendiente  

---

### 🪲 Bug 003 – Sin validación de promo code
**Descripción:**  
El campo de código promocional permite ingresar cualquier texto sin validar el formato `XX9-XXX-999`.  
El sistema no muestra feedback inmediato ni bloquea entradas erróneas.

**Tipo:** Validación / Negocio  
**Estado:** Pendiente  

---

### 🪲 Bug 004 – Fechas edge no controladas
**Descripción:**  
Casos como “December → July (next year)” no son validados correctamente.  
El sistema no verifica con precisión la diferencia de 12 meses mínimos.

**Tipo:** Lógica / Negocio  
**Estado:** Riesgo  

---

### 🪲 Bug 005 – Campos vacíos sin mensaje
**Descripción:**  
Si el usuario no selecciona valores en los campos de fechas o promocode y presiona “Search”,  
la app no muestra ningún mensaje de error ni feedback visual.

**Tipo:** Usabilidad  
**Estado:** Riesgo  

---

## 🧾 Observaciones Generales
- Se recomienda implementar validaciones preventivas antes de enviar el formulario.  
- Validar formato y coherencia de los mensajes mostrados al usuario.  
- Confirmar con el equipo de negocio si la lógica de “Seats available” está basada en datos reales o es estática.  

---

## ✍️ QA Responsible
**Nombre:** [Tu Nombre]  
**Fecha:** [Actualízala antes de la entrevista]  

