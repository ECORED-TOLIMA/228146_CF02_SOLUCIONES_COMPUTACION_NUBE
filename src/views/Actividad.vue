<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<br><b> Objetivo:</b> evaluar la comprensión de los conceptos relacionados con el análisis, especificación, validación y gestión de requisitos de <em>software</em>, permitiendo identificar la capacidad para reconocer técnicas, herramientas y procesos utilizados en la definición y control de los requisitos dentro de los proyectos de desarrollo de <em>software</em>.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del análisis de requisitos en un proyecto de <em>software</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar la interfaz gráfica del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar, comprender y documentar las necesidades del usuario.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Programar las funcionalidades del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar pruebas de funcionamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el análisis, la especificación, la validación y la gestión de requisitos de <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes es una técnica utilizada para el análisis de requisitos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Entrevistas con usuarios.', esCorrecta: true },
            { id: 'b', texto: 'Instalación del sistema.', esCorrecta: false },
            { id: 'c', texto: 'Compilación del código.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Configuración del servidor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el análisis, la especificación, la validación y la gestión de requisitos de <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: 'La priorización de requisitos permite:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diseñar la base de datos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Programar el sistema automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar los requisitos del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Determinar el orden de implementación de las funcionalidades.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el análisis, la especificación, la validación y la gestión de requisitos de <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué función cumple una matriz de trazabilidad de requisitos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar interfaces de usuario.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Crear diagramas de red.', esCorrecta: false },
            {
              id: 'c',
              texto:
                'Relacionar los requisitos con otros elementos del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Programar módulos del sistema',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el análisis, la especificación, la validación y la gestión de requisitos de <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: 'La descomposición funcional consiste en:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dividir el sistema en funciones o procesos más pequeños.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir el número de usuarios del sistema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar funcionalidades del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambiar los requisitos del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el análisis, la especificación, la validación y la gestión de requisitos de <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el objetivo de la especificación de requisitos de <em>software</em>?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Programar el sistema.', esCorrecta: false },
            {
              id: 'b',
              texto:
                'Documentar de forma clara y estructurada los requisitos del sistema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Instalar el sistema en los equipos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar las pruebas del <em>software</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el análisis, la especificación, la validación y la gestión de requisitos de <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes estándares se utiliza para la especificación de requisitos de <em>software</em>?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'IEEE 830', esCorrecta: true },
            { id: 'b', texto: 'HTML5', esCorrecta: false },
            { id: 'c', texto: 'CSS3', esCorrecta: false },
            { id: 'd', texto: 'ISO 14001', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el análisis, la especificación, la validación y la gestión de requisitos de <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: 'Las plantillas ERS se utilizan para:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Programar interfaces gráficas.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Diseñar bases de datos.', esCorrecta: false },
            {
              id: 'c',
              texto:
                'Organizar y documentar los requisitos del sistema de manera estructurada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ejecutar pruebas de rendimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el análisis, la especificación, la validación y la gestión de requisitos de <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'En los proyectos tradicionales, la documentación de requisitos se caracteriza por',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambios permanentes en los requisitos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Documentación detallada desde las etapas iniciales.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Ausencia de documentación.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Implementación sin análisis previo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el análisis, la especificación, la validación y la gestión de requisitos de <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'En los proyectos ágiles, los requisitos suelen documentarse mediante',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diagramas de red.', esCorrecta: false },
            { id: 'b', texto: 'Diagramas eléctricos.', esCorrecta: false },
            { id: 'c', texto: 'Código fuente.', esCorrecta: false },
            { id: 'd', texto: 'Historias de usuario.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el análisis, la especificación, la validación y la gestión de requisitos de <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: 'La validación de requisitos tiene como objetivo:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Verificar que los requisitos representan las necesidades del usuario.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Programar el sistema.', esCorrecta: false },
            { id: 'c', texto: 'Diseñar la base de datos.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Instalar el <em>software</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el análisis, la especificación, la validación y la gestión de requisitos de <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: 'Un requisito de <em>software</em> se considera válido cuando',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Es fácil de programar.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Solo lo entiende el equipo técnico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Representa correctamente las necesidades del usuario y puede verificarse.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'No necesita documentación.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el análisis, la especificación, la validación y la gestión de requisitos de <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál de las siguientes es una técnica de validación de requisitos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Revisión con los usuarios.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Instalación del <em>software</em>.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Compilación del código.', esCorrecta: false },
            { id: 'd', texto: 'Ejecución del servidor.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el análisis, la especificación, la validación y la gestión de requisitos de <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: 'Los prototipos se utilizan principalmente para:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar el sistema final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Visualizar y evaluar el funcionamiento del sistema antes de su desarrollo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de programar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Vender el producto a otros clientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el análisis, la especificación, la validación y la gestión de requisitos de <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué es un requisito no funcional?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una descripción de las tareas que el sistema debe realizar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una restricción sobre los servicios o funciones ofrecidos por el sistema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un error en el código fuente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una función que el usuario no necesita.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el análisis, la especificación, la validación y la gestión de requisitos de <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: 'La gestión de cambios en los requisitos busca:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar que el proyecto evolucione.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Controlar y rastrear las modificaciones de manera organizada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Permitir cambios sin previo aviso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la comunicación con el cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el análisis, la especificación, la validación y la gestión de requisitos de <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué técnica de recolección de requisitos implica observar al usuario en su entorno de trabajo?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Etnografía u observación directa.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Lluvia de ideas.', esCorrecta: false },
            { id: 'c', texto: 'Encuestas por correo.', esCorrecta: false },
            { id: 'd', texto: 'Pruebas unitarias.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el análisis, la especificación, la validación y la gestión de requisitos de <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es el beneficio de utilizar herramientas CASE en la gestión de requisitos?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Automatizar el seguimiento y la trazabilidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar por completo a los analistas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la calidad del <em>software</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar los errores de documentación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el análisis, la especificación, la validación y la gestión de requisitos de <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'Un requisito es "ambiguo" cuando:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Es muy corto.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Tiene múltiples interpretaciones posibles.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Está escrito en inglés.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Se puede verificar fácilmente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el análisis, la especificación, la validación y la gestión de requisitos de <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué documento sirve como acuerdo formal entre el cliente y los desarrolladores?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El manual de usuario.', esCorrecta: false },
            { id: 'b', texto: 'El código fuente.', esCorrecta: false },
            {
              id: 'c',
              texto:
                'La especificación de requisitos de <em>software</em> (ERS).',
              esCorrecta: true,
            },
            { id: 'd', texto: 'La factura del proyecto.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con el análisis, la especificación, la validación y la gestión de requisitos de <em>software</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
