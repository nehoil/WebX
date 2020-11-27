
<script>
export default {
  props: {
    items: [Array],
  },
  data() {
    return {
      items: null,
      page: 1,
      perPage: 1,
      pages: [],
    };
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.items.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }
    },
    paginate(items) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return items.slice(from, to);
    },
  },
  computed: {
    displayedItems() {
      return this.paginate(this.items);
    },
  },
  watch: {
    items() {
      this.setPages();
    },
  },
};
</script>