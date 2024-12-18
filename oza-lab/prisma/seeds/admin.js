import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function addAdmin () {
  await prisma.user.create({
    data: {
      title: 'mr',
      roleId: 1,
      firstName: 'Admin',
      lastName: '',
      dob: new Date('1999-10-10'),
      gender: 'male',
      email: 'nikhil.lathiya31@gmail.com',
      contact: '7046473969',
      address: 'Ghandhidham'
    }
  })
}

addAdmin()
  .then(() => {
    console.log('Admin added successfully')
  })
  .catch((e) => {
    console.error(e)
  })
