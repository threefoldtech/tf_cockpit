import lastTrades from '../../components/lasttrades'
import newscard from '../../components/newscard'
import tokenPriceGraph from '../../components/tokenpricegraph'
import miniGraph from '../../components/minigraph'

export default {
  name: 'token',
  components: { lastTrades, tokenPriceGraph, newscard, miniGraph },
  props: [],
  data () {
    return {
      showBlockDialog: true
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    showDialog () {
      this.showBlockDialog = true
    }
  }
}
