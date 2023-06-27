from capa_datos_persona.Persona import Persona
from capa_datos_persona.conexion import Conexion
from logger_base import log


class PersonaDAO:
    '''
    DAO significa: data Acces object
    CRUD significa:
                    Create -> insertar
                    Read   -> Seleccionar
                    Update -> Actualizar
                    Delete -> Eliminar
    '''
    _SELECCIONAR = 'SELECT * FROM persona ORDER BY id_persona'
    _INSERTAR = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    _ACTUALIZAR ='UPDATE persona SET nombre=%s, apellido=%s, email=%s WHUERE id_persona=%s'
    _ELIMINAR = 'DELETE FROM persona WHERE id_persona=%s'

        #Definimos los métodos de clase
    @classmethod
    def seleccionar(cls, registros=None):
        #with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                cursor.execute(cls._SELECCIONAR)
                registro = cursor.fetchall()
                personas = [] #Creamos una lista
                for registro in registros:
                    persona = Persona(registro[0], registro[1], registro[2], registro[3])
                    personas.append(persona)
                     return personas

    if __name__ '__main__':
    persona = PersonaDAO.seleccionar()
    for persona in personas:
        log.debug(persona)

    @classmethod
    def insertar(cls, persona):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                valores = (persona.nombre, persona.apellido, persona.email)
                cursor.execute(cls._INSERTAR, valores)
                log.debug(f'Persona Insertada: {persona}')
                return cursor.rowcount

    @classmethod
    def actualizar(cls,perosna):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                valores = (persona.nombre, persona.apellido, persona.email, persona.id_persona)
                cursor.execute(cls._ACTUALIZAR, valores)
                log.debug(f'Persona actualizada: {persona}')
                return cursor.rowcount



    #Actualizar un registro
    # persona1 = Persona(1, 'Juan José', 'Pena', 'jpena@mail.com')
    # personas_actualizadas = PersonaDAO.actualizar(persona1)
    # log.debug(f'Personas actualizadas: {personas_actualizadas}')
    
    #Insertar un registro
    #persona1 = Persona(nombre='Omero', apellido='Ramos', email='omeror@mail.com')
    #personas_insertadas = PersonaDAO.insertar(persona1)
    #log.debug(f'Personas Insertadas: {personas_insertadas}')

    # Seleccionar objetos
    personas = PersonaDAO.seleccionar()
    for persona in personas:
        log.debug(persona)
                    
