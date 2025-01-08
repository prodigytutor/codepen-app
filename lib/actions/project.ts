import prisma from '../db'

interface Project {
    name: string
    description: string
    userId: string
    }

export async function createProject(data: Project) {
  return prisma.project.create({ data })

}

export async function getProjects() {
    let userId
  return prisma.project.findMany({
    where: {
        userId: userId
        }
 })
}

export async function getProjectById(id: string) {
  return prisma.project.findUnique({
    where: {
      id: id
    }
  })
}