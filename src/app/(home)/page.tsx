import ProjectCard from '@/components/ProjectCards/ProjectCard'

export default function Home() {
  return (
    <>
      <div className='desription'>
        <h1>Meus Projetos</h1>
        <p className='mb-2'>
          Este portfólio foi o meu primeiro projeto criado em <strong>Next.js</strong>, abaixo você
          poderá ver outros projetos que fiz na intenção de aprender sobre as tecnologias front-end
          e desenvolver minhas habilidades como desenvolvedor.
        </p>
      </div>
      <section className='project-list'>
        <ProjectCard />
      </section>
    </>
  )
}
