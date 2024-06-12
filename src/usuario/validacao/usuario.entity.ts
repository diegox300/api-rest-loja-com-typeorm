import {Entity, 
        Column,
        CreateDateColumn,
        UpdateDateColumn,
        DeleteDateColumn,
        PrimaryGeneratedColumn} 
        from 'typeorm';


@Entity({ name: 'usuarios' }) // tabela
export class UsuarioEntity { 

  @PrimaryGeneratedColumn('uuid')
  id: string; //campos

  @Column({ name: 'nome', length: 100, nullable: false }) // coluna
  nome: string;
  
  @Column({ name: 'email', length: 70, nullable: false }) // coluna
  email: string;

  @Column({ name: 'senha', length: 255, nullable: false }) // coluna
  senha: string; // coluna

  @CreateDateColumn ({ name: 'created_at'}) // coluna
  createdAt: string;

  @UpdateDateColumn ({ name: 'updated_at'}) // coluna
  updatedAt: string;
  
  @DeleteDateColumn ({ name: 'deleted_at'}) // coluna
  deletedAt: string;
}
