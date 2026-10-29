export interface Competencia {
  categoria: string;
  itens: string[];
}

export const competencias: Competencia[] = [
  { categoria: "Backend", itens: ["Python", "FastAPI", "Java", "Spring Boot", "APIs REST"] },
  { categoria: "Frontend", itens: ["React", "JavaScript", "HTML", "CSS"] },
  { categoria: "Banco de Dados", itens: ["PostgreSQL", "SQLite", "SQL Server", "SQLAlchemy"] },
  { categoria: "Ferramentas & DevOps", itens: ["Git", "GitHub", "JWT", "Alembic", "Docker (básico)"] },
  { categoria: "Conceitos", itens: ["POO", "Estrutura de Dados", "Arquitetura MVC", "Segurança da Informação"] },
];