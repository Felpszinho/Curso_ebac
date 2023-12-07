  const Alunos=[

    {
        nome:'felipe',
        nota:5
    },
    {
        nome:'julia',
        nota:8
    },
    {
        nome:'jose',
        nota:4
    },
    {
        nome:'lucas',
        nota:7
    }
  ]

   const Aprovados=Alunos.filter(function(item){
    return item.nota >= 6
      
   })
  console.log(Alunos)
  console.log(Aprovados)