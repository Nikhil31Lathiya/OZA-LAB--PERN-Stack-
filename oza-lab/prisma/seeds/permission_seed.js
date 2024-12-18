import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function addPermission () {
  await prisma.permission.createMany({
    data: [
      { permissionName: 'CAN_MUTATE_USER', roleId: 1 },
      { permissionName: 'CAN_MUTATE_PATIENT', roleId: 1 },
      { permissionName: 'CAN_MUTATE_PATIENT', roleId: 2 },
      { permissionName: 'CAN_ADD_TEST', roleId: 1 },
      { permissionName: 'CAN_VIEW_TEST', roleId: 1 },
      { permissionName: 'CAN_VIEW_TEST', roleId: 2 },
      { permissionName: 'CAN_VIEW_TEST', roleId: 3 },
      { permissionName: 'CAN_EDIT_TEST', roleId: 1 },
      { permissionName: 'CAN_DELETE_TEST', roleId: 1 },
      { permissionName: 'CAN_MUTATE_USER_REPORT', roleId: 1 },
      { permissionName: 'CAN_MUTATE_USER_REPORT', roleId: 2 },
      { permissionName: 'CAN_VIEW_USER_REPORT', roleId: 3 }
    ]
  })
}

addPermission().then(() => {
  console.log('Permissions added successfully')
}).catch((e) => {
  console.error(e)
})
