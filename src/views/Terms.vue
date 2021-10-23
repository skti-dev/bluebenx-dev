<template>
  <section class="terms max-width" :class="{'is-loading' : pendingRequest}">
    <header class="step-back__header">
      <fa-icon :icon="['fas', 'chevron-left']" class="cursor--click text--dark-blue" @click="$router.push({ name: 'register-welcome' })" />
      <span class="text--bold text--center" v-text="`Termos e condições`"></span>
    </header>
    <div class="terms__content mt-30">
      <p class="text--bold mb-10" v-text="`Política de Privacidade da Plataforma BLUEBENX`"></p>
      <p class="mb-10" v-text="`Aqui você encontrará nossas diretrizes a respeito de como coletamos informações e dados dos nossos USUÁRIOS e visitantes e como os protegemos. O objetivo desse documento é ajudá-lo a decidir conscientemente sobre o compartilhamento de informações conosco e a utilização do SITE.`">
      <p class="mb-10" v-text="`A presente Política regula as condições gerais de coleta, uso, armazenamento, tratamento e proteção de dados nos sites, aplicativos e aplicações de Internet para cumprimento da Lei nº 13.709/2018 (Lei Geral de Proteção de Dados).`"></p>
      <p class="mb-10" v-text="`A BLUEBENX TECNOLOGIA FINANCEIRA SOCIEDADE ANÔNIMA, empresa com sede na R. Jandiatuba, 630 – Torre A – Cj. 605, Vila Andrade, São Paulo, SP, 05716-150 (BLUEBENX) e empresas coligadas, se comprometem a usar de todos os esforços em prol da proteção de dados e privacidade dos usuários no site e/ou do aplicativo.`"></p>
      <p class="mb-10" v-text="`A BLUEBENX poderá a seu critério e sempre que entender necessário, atualizar e/ou alterar a presente POLÍTICA DE PRIVACIDADE, com o compromisso de manter no site e aplicativo a versão atualizada, com indicação da data de última atualização. É importante o usuário verificar eventuais atualizações, afinal, as atualizações não exigem nova concordância, e, caso o Usuário permaneça navegando no site ou utilizando o aplicativo após atualização da POLÍTICA DE PRIVACIDADE a atitude será interpretada como anuência às eventuais modificações e/ou atualizações.`"></p>
      <p class="mb-10" v-text="`Entretanto, caso o Usuário não concorde com quaisquer termos da Política de Privacidade poderá solicitar cancelamento do produto/serviços utilizado, respeitadas as regras de carência, fluxos de pagamento, de cada produto.`"></p>
      <p class="text--bold mb-10" v-text="`– Coleta dos Dados`"></p>
      <p class="mb-10" v-text="`O USUÁRIO deverá ter mais de 18 anos e se compromete com a veracidade das informações apresentadas. Ao acessar o site ou o aplicativo, fica autorizada, desde já, a coleta e armazenamento de dados (como: endereço IP e informações do Dispositivo de Acesso (identificador, dados do dispositivo como nome e tipo, sistema operacional, geolocalização, informações de rede móvel e/ou wi-fi e informações padrão do log da web, navegador, ou qualquer outra informação/dado que julgar pertinentes ou necessárias) que poderão ser utilizados e tratados pela BLUEBENX, conforme o presente TERMO.`"></p>
      <p class="mb-10" v-text="`Para efetivar o cadastramento, o USUÁRIO deverá fornecer dados pessoais e número de documentos, tais como: nome completo, nacionalidade, naturalidade, estado civil, profissão, número do RG e data de expedição, número do CPF, filiação, empregador, endereço residencial, comercial e eletrônico, dados bancários, foto, mas não se limitando a estas, resguardado o direito de solicitar informações adicionais, conforme TERMO E CONDIÇÕES DE USO`"></p>
      <p class="mb-10" v-text="`Fica o usuário ciente que além dos dados por ele fornecidos, a BLUEBENX poderá se valer de dados coletados a partir da navegação, seja pelo site, seja pelo aplicativo.`"></p>
      <p class="mb-10" v-text="`Esses dados que poderão ser coletados terão por finalidade facilitar a identificação de usuários, o modo de acesso, a frequência e a identificação de quais páginas foram acessadas, servem para facilitar futura navegação e personalização da plataforma, bem como serve para coletar informação com intuito de prevenção de fraudes.`"></p>
      <p class="mb-10" v-text="`Poderão ser coletadas novas informações de dados do USUÁRIO quando do contato com a BLUEBENX ou a partir de respostas às pesquisas elaboradas e disponibilizadas.`"></p>
      <p class="mb-10" v-text="`O usuário tem a faculdade de bloquear, desativar ou mesmo excluir a utilização de cookies (ou similar) a qualquer momento, estando ciente, entretanto, que poderá haver interferência em algumas funções da plataforma e/ou serviços.`"></p>
      <p class="mb-10" v-text="`Fica a BLUEBENX absolutamente isenta de qualquer responsabilidade por cookies de sites redirecionados ou de propagandas de terceiros.`"></p>
      <p class="mb-10" v-text="`Fica desde já autorizado pelo USUÁRIO o compartilhamento das informações de dados coletados com as demais empresas coligadas, ou ainda, com instituições financeiras parceiras, investidores e/ou órgãos governamentais, que passarão a ser os responsáveis pela guarda, armazenamento, uso e tratamento desses dados.`"></p>
      <p class="mb-10" v-text="`Os dados do USUÁRIO somente poderão ser compartilhados ou transferidos após a formalização de termo de confidencialidade com esses terceiros, de tal modo que estes se comprometam a tratar as informações e dados com o mesmo zelo e cautela. Em exceção a tal formalidade os dados poderão ser compartilhados mediante requisições judiciais ou de autoridades públicas.`"></p>
      <p class="text--bold mb-10" v-text="`– Do Uso dos Dados`"></p>
      <p class="mb-10" v-text="`Os dados coletados ou fornecidos pelo USUÁRIO, poderão ser utilizados para identificação de eventual violação do acesso por terceiros não autorizados, buscando evitar fraudes ou atividades prejudiciais, e, ainda, para ajudar a prevenir atividades proibidas, ilegais, ou quaisquer violações dos TERMOS DE CONDIÇÕES E USO.`"></p>
      <p class="mb-10" v-text="`Os dados coletados e/ou fornecidos pelo usuário serão utilizados, ainda, para promoção de marketing direcionado e aprimoramento dos serviços oferecidos. Bem como, servirão para processar operações.`"></p>
      <p class="text--bold mb-10" v-text="`– Do Armazenamento e Proteção dos Dados`"></p>
      <p class="mb-10" v-text="`Todos os dados coletados ou informados serão protegidos, por tudo quanto exposto nesta POLÍTICA DE PRIVACIDADE, desde que sirvam para identificação do usuário.`"></p>
      <p class="mb-10" v-text="`Essa Política de Privacidade não protege dados anônimos, já que não atingem a finalidade de identificação do usuário.`"></p>
      <p class="mb-10" v-text="`O acesso site/aplicativo e seus produtos serão realizados por uso de senha, que é pessoal e intransferível, que deve ser protegida pelo usuário, conforme dispõe o termo e condições de uso, devendo ser comunicada imediatamente qualquer possibilidade de violação para providências.`"></p>
      <p class="mb-10" v-text="`Considerando que a transmissão de informações se dará essencialmente pela internet e que pode ser acometida de falha (de hardware ou software), a BLUEBENX não será responsabilizada por falhas ocorridas no dispositivo utilizado. Também não se cogita responsabilizar por eventuais problemas havidos com a conexão de internet.`"></p>
      <p class="mb-10" v-text="`Na hipótese de encerramento das atividades pela BLUEBENX, ou na rescisão dos TERMOS DE CONDIÇÕES E USO, fica o usuário alertado que seu cadastro será cancelado, porém os dados coletados podem ser armazenados por 5 (cinco) anos, após esse período será excluído das bases da BLUEBENX.`"></p>
      <p class="mb-10" v-text="`O Usuário confirma que leu, entendeu e aceitou todos os termos e condições aqui presentes nesta POLÍTICA DE PRIVACIDADE e tratamento de dados, consentindo, ainda, que caso não aceite no todo ou em parte as condições aqui constantes não poderá prosseguir cadastramento e utilização de quaisquer serviços da BLUEBENX.`"></p>
      <p class="mb-10" v-text="`Neste ato, o USUÁRIO concorda com a transferência, armazenamento, processamento e uso de seus dados no formato exposto nesta Política de Privacidade.`"></p>
      <p class="mb-10" v-text="`Caso surja alguma reclamação sugestão, ou mesmo para solução de eventuais conflitos, a BlueBenx disponibiliza os canais de comunicação:`"></p>
      <p> E-mail: <a href="mailto:atendimento@bluebenx.com" class="text--default-blue" target="_blank" v-text="`atendimento@bluebenx.com`"></a>. </p>
      <p class="mb-10" v-text="`Telefone: (11) 4130-1030.`"></p>   
      <button class="btn default-blue w-100 my-30" v-text="`Aceitar`" @click="accept"></button>
    </div>
    <transition name="slide">
      <Loading v-if="pendingRequest" mode="out-in" />
    </transition>
  </section>
</template>

<script>
  import Loading from "@/components/loading/Loading"

  export default {
    components: { Loading },
    data() {
      return {
        pendingRequest: false
      }
    },
    methods: {
      async accept() {
        try {
          if(this.pendingRequest) return
          this.pendingRequest = true
          const currentDate = new Date().toJSON()
          const response = await this.$apiRequest.post(`/user`, { date: currentDate })
          const { data } = { ...response.data }
          const { uid } = data
          this.$store.commit("setUserID", uid)
          this.pendingRequest = false
          this.$router.push({ name: 'register' })
        }catch(e) {
          this.pendingRequest = false
          this.$router.push({ name: "error" })
          console.error("Erro ao aceitar os termos")
          console.error(e)
        }
      }
    }
  }
</script>

<style scoped>
  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
  .slide-enter-active {
    animation: slide-in 300ms ease;
  }
  .slide-leave-active {
    animation: slide-out 300ms ease;
  }
</style>
