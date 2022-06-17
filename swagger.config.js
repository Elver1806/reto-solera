/**
 *
 * @swagger
 * components:
 *  schemas:
 *    Users:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *          description: Id del Usuario
 *        user:
 *          type: string
 *          description: Username del usuario
 *        password:
 *          type: string
 *          description: Password encryptada
 *        fullName:
 *          type: string
 *          description: Nombre Completo del Usuario
 *        createdAt:
 *          type: Date
 *          description: Fecha Creacion
 *        updateAt:
 *          type: Date
 *          description: Fecha Actualizacion
 *      required:
 *       - id
 *       - user
 *       - password
 *       - fullName
 *       - createdAt
 *       - updateAt
 *      example:
 *        id: 10
 *        user: "ADMIN"
 *        password: "$2b$12$CT65snB8S2J4dZbT8tqzneqZL4ScrTaiUJmyBESk8kNPu0Y.kFnBS"
 *        fullName: "PEDRO JOSE LUIS"
 *        createdAt: 2022-01-15 10:10:10
 *        updateAt: 2022-01-15 10:10:10
 */


/**
 *
 * @swagger
 * /api/v1/user/login:
 *  get:
 *    summary: Consulta el nombre del usuario si la contraseña es correcta
 *    tags: [USERS]
 *    parameters:
 *      - in: query
 *        name: username
 *        schema:
 *          type: string
 *        required: true
 *        description: username del Usuario
 *      - in: query
 *        name: password
 *        schema:
 *          type: string
 *        required: true
 *        description: password del Usuario
 *    responses:
 *      200:
 *        description: Se devolvio exitosamente!
 *      404:
 *        description: Recurso no encontrado!
 */

