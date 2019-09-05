export default {
  name: 'nodestable',
  components: {},
  props: [],
  data () {
    return {
      showResult: false,
      itemsPerPage: 4,
      expanded: [],
      searchNodes: '',
      headers: [
        {
          text: 'Node',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Uptime', value: 'calories' },
        { text: 'Version', value: 'fat' },
        { text: 'ID', value: 'carbs' },
        { text: 'Farmer', value: 'protein' },
        { text: 'Status', value: 'status', align: 'center' }
      ],
      items: [
        {
          name: 'Node 1',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          status: 'Active'
        },
        {
          name: 'Node 2',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          status: 'Active'
        },
        {
          name: 'Node 3',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          status: 'Not active'
        },
        {
          name: 'Node 4',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          status: 'Active'
        },
        {
          name: 'Node 5',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          status: 'Active'
        },
        {
          name: 'Node 6',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          status: 'Not active'
        },
        {
          name: 'Node 7',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          status: 'Active'
        },
        {
          name: 'Node 8',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          status: 'Active'
        },
        {
          name: 'Node 9',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          status: 'Active'
        },
        {
          name: 'Node 10',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          status: 'Active'
        }
      ]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getColor (status) {
      if (status === 'Active') return 'green'
      else return 'red'
    }

  }
}