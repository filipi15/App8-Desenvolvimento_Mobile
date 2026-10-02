import { View, ScrollView, Text, Image } from 'react-native';
import { styles } from '../../styles.js';


function ComponenteScroll(){
  return(
      <ScrollView>
        <View style={styles.box}>
          <Text style={styles.titulos}>Desenvolvedor Backend Pleno</Text>
          <Text style={styles.textos}>Salário: R$ 6.500,00</Text>
          <Text style={styles.textos}>Descrição: Desenvolvimento e manutenção de APIs REST em Node.js ou Java, integração com bancos de dados relacionais (PostgreSQL) e participação em code reviews. Desejável experiência com Docker e AWS.</Text>
          <Text style={styles.textos}>Contato: rh@techsolucoes.com.br</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.titulos}>Desenvolvedor Front-end</Text>
          <Text style={styles.textos}>Salário: R$ 5.500,00</Text>
          <Text style={styles.textos}>Descrição: Criação de interfaces responsivas com React e TypeScript, consumo de APIs e colaboração com o time de UX/UI para garantir boa experiência do usuário.</Text>
          <Text style={styles.textos}>Contato: carreiras@webcriativa.com.br</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.titulos}>Analista de Suporte Técnico</Text>
          <Text style={styles.textos}>Salário: R$ 3.200,00</Text>
          <Text style={styles.textos}>Descrição: Atendimento a usuários internos e externos, resolução de chamados de primeiro e segundo nível, configuração de equipamentos e manutenção de sistemas operacionais Windows e Linux.</Text>
          <Text style={styles.textos}>Contato: suporte.rh@infoserv.com.br</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.titulos}>Engenheiro de Dados</Text>
          <Text style={styles.textos}>Salário: R$ 8.000,00</Text>
          <Text style={styles.textos}>Descrição: Construção e otimização de pipelines de dados (ETL/ELT), modelagem de data warehouse e automação de processos com Python e SQL. Conhecimento em Airflow e Spark é um diferencial.</Text>
          <Text style={styles.textos}>Contato: vagas@datainsight.com.br</Text>
        </View>
      </ScrollView>
  )
}


export default ComponenteScroll;
