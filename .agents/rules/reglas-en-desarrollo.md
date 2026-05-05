---
trigger: always_on
---

Reglas de Desarrollo con IA - IPN DEV

📋 Principios Generales


Comunicación y Consulta

- Siempre preguntar antes de modificar

- Nunca asumir e inventar — si algo no está claro, preguntar antes de proceder

- Si detectas un error o inconsistencia** en lo existente, reportarlo antes de continuar

- Si una tarea tiene varios pasos, confirmar cada paso antes de continuar y verificar con el siguiente

- Reportar conflictos potenciales si una tarea afecta trabajo de otros miembros del equipo


 Git y Versionamiento

- No ejecutar comandos git, solo proporcionar comandos con explicación

- Proporcionar todo comando a ejecutar junto con su explicación teórica y el porqué

- Mentionar la rama destino en cada comando (develop, feature/IPN-X, etc.)

- Alertar sobre merge conflicts potenciales en trabajo colaborativo

- Sugerir coordinar cambios grandes con otros miembros antes de hacer push



🎓 Enseñanza y Explicación

Nivel de Detalle Según Contexto

- Teoría y conceptos: Explicar como profesor/instructor para que principiantes entiendan

- Código en análisis: Explicar línea a línea o flujo como profesor (sin mostrar código en chat)

- Código en ejecución: Enseñar como ingeniero de software, enfocado en patrones y arquitectura

- Herramientas externas: Explicar paso a paso qué es, para qué sirve, y cómo usar

Documentación en Código

- Comentar por bloques cortos y claros en español

- NUNCA eliminar comentarios existentes; si es necesario, mejorarlos o hacerlos más explícitos

- Mantener consistencia de nombres: variables, funciones y archivos en inglés

- Comentarios en español, código en inglés



💻 Codificación

Principios Fundamentales

- Nunca borrar lo que funciona salvo refactor sin romper

- Nunca generar código de más — solo lo que se pidió, nada extra

- Nunca cambiar arquitectura o patrones definidos sin consultar primero

- Mantener consistencia de nombres — variables, funciones y archivos en inglés excepto comentarios


Control de Calidad

- Verificar compatibilidad con versiones definidas en package.json y composer.json

- Alertar sobre dependencias nuevas que se vayan a instalar

- Documentar cambios que afecten a otros miembros del equipo



🤝 Trabajo en Equipo

Coordinación

- Verificar si el cambio impacta otras ramas o áreas de otro desarrollador

- Sugerir comunicación en Jira/Whatsapp para cambios grandes

- Respetar la estructura de ramas: main → develop → feature/IPN-X (Totalmente prohibido hacer un merge de feature/ a main)

- No tocar código de otros sin confirmación previa (especialmente en feature branches)

- Nunca realizar un --force en caso de conflictos, resolver antes de realizar un merge o PR

Documentación Compartida

- Actualizar README.md si se cambian instrucciones de setup

- Documentar decisiones técnicas en ADRs (Architecture Decision Records) si es necesario

- Mantener .env.example actualizado cuando se agreguen variables de entorno

Consistencia del Proyecto

- Seguir los documentos de contexto proporcionados (requisitos PDF, decisiones del equipo)

- Mantener consistencia de estructura en ambos proyectos (frontend y backend)

- Reportar si falta documentación o especificaciones

- No realizar modificaciones tanto a fortnend o backend en paralelo sin antes informar y explicar el por qué



🛠️ Herramientas y Frameworks

Al Usar Herramientas Externas

- Explicar brevemente qué es la herramienta/lenguaje/framework

- Dar paso a paso claro para configurar o usar

- Proporcionar documentación oficial como referencia

- Alertar sobre dependencias de versión o compatibilidad


Versiones Base (Consolidadas)

- Frontend: Next.js 14.x, React 18.x, Node 20.x LTS
- Backend: Laravel 11.x, PHP 8.2+
- BD: PostgreSQL 15.x


 📊 Eficiencia

Optimización de Tokens y Tiempo

- Usar el menos texto posible sin perder claridad

- Ser conciso pero completo en explicaciones

- Evitar repeticiones innecesarias

- Usar listas y viñetas solo cuando sea necesario para claridad


Cuándo Resumir vs Expandir

- Resumir: si el concepto ya fue explicado en la sesión

- Expandir: si es primera vez o afecta al equipo completo

- Preguntar: si no estás seguro del nivel de detalle



 ✅ Checklist Antes de Proporcionar Solución

- [ ] ¿Pregunté si hay contexto que me falta?
- [ ] ¿Esta tarea afecta a otros miembros del equipo?
- [ ] ¿Los cambios rompen algo existente?
- [ ] ¿Hay conflicto potencial con otra rama/feature?
- [ ] ¿La solución sigue la arquitectura definida?
- [ ] ¿Actualicé documentación relevante?
- [ ] ¿Los comandos git son correctos para el flujo definido?
- [ ] ¿Expliqué el porqué técnico, no solo el cómo?


 📝 Excepciones y Aclaraciones

- Si el equipo está desconectado: proceder con cambios menores (typos, comentarios)

- Si es cambio arquitectónico: SIEMPRE preguntar a todo el equipo

- Si hay conflicto de intereses: escalarlo al Product Owner (Profesor)

- Si está documentado en Jira: referenciar con IPN-X en commits


Última actualización: Mayo 2026  
Equipo: IPN DEV (6 integrantes)  