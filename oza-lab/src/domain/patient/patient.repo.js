import { prisma } from '../../utils/client.js'

class PatientRepository {
  constructor () {
    this.prisma = prisma
  }

  async createPatient (body) {
    try {
      return this.prisma.patient.create({
        data: body
      })
    } catch (error) {
      console.log(error)
    }
  }

  async getPatients () {
    try {
      return this.prisma.patient.findMany({
        orderBy: {
          id: 'asc'
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  async getPatientsCount () {
    try {
      const total = await this.prisma.patient.groupBy({
        by: ['userId']
      })
      return total.length
    } catch (error) {
      console.log(error)
    }
  }

  async getPatient (id) {
    try {
      return this.prisma.patient.findFirst({ where: { id } })
    } catch (error) {
      console.log(error)
    }
  }

  async getPatientByUserId (userId) {
    try {
      return this.prisma.patient.findMany({ where: { userId } })
    } catch (error) {
      console.log(error)
    }
  }

  async deletePatient (id) {
    try {
      const findPatient = await this.prisma.patient.findFirst({ where: { id } })
      if (findPatient) {
        return this.prisma.patient.delete({ where: { id } })
      } else {
        return { message: 'Patient not found ' }
      }
    } catch (error) {
      console.log(error)
    }
  }

  async updatePatient (id, body) {
    try {
      return this.prisma.patient.update({
        where: { id }, data: body
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default PatientRepository
