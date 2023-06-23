from capa_datos_persona.Persona import Persona
from capa_datos_persona.conexion import Conexion


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
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                cursor.execute(cls._SELECCIONAR)
                registro = cursor.fetchall()
                personas = [] #Creamos una lista
                for registro in registros:
                    persona = Persona(registro[0], registro[1], registro[2], registro[3])
                    personas.append(persona)