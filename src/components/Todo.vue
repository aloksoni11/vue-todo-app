<template>
  <div>
    <todo-sidebar></todo-sidebar>

    <div class="sidebar-content">
      <b-card>
        <b-form-group>
          <b-input-group>
            <b-input-group-prepend is-text>
              <b-icon icon="search"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              v-model="search"
              placeholder="Search..."
            ></b-form-input>
            <b-input-group-append is-text>
              <b-dropdown
                size="sm"
                variant="link"
                toggle-class="text-decoration-none p-0"
                no-caret
                right
              >
                <template #button-content>
                  <b-icon icon="three-dots-vertical"></b-icon>
                </template>
                <b-dropdown-item :to="{ query: { q: $route.query.q } }"
                  >Sort Reset</b-dropdown-item
                >
                <b-dropdown-item
                  :to="{ query: { sort: 'title-asc', q: $route.query.q } }"
                  >Sort A-Z</b-dropdown-item
                >
                <b-dropdown-item
                  :to="{ query: { sort: 'title-dsc', q: $route.query.q } }"
                  >Sort Z-A</b-dropdown-item
                >
              </b-dropdown>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
        <b-list-group>
          <b-list-group-item v-for="(todo, index) in filterData" :key="index">
            {{ todo.title }}
            <b-badge
              v-for="(tag, index) in todo.tags"
              :key="index"
              :variant="tag.color"
              class="float-right mr-1"
            >
              {{ tag.name }}
            </b-badge>
          </b-list-group-item>
          <b-list-group-item
            variant="danger"
            class="text-center"
            v-show="filterData.length == 0"
          >
            Search Not Found!
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
  </div>
</template>

<script>
import TodoSidebar from './TodoSidebar.vue';

export default {
  components: {
    TodoSidebar,
  },
  data() {
    return {
      // search: this.$route.query.q||'' ,
      todoData: [
        {
          userId: 1,
          subData: 'important',
          title: 'delectus aut autem',
          tags: [
            { name: 'Medium', color: 'warning' },
            { name: 'High', color: 'danger' },
          ],
        },
        {
          userId: 2,
          subData: 'important',
          title: 'quis ut nam facilis et officia qui',
          tags: [
            { name: 'Medium', color: 'warning' },
            { name: 'Team', color: 'primary' },
          ],
        },
        {
          userId: 3,
          subData: 'important',
          title: 'fugiat veniam minus',
          tags: [
            { name: 'Medium', color: 'warning' },
            { name: 'Update', color: 'info' },
          ],
        },
        {
          userId: 4,
          subData: 'important',
          title: 'et porro tempora',
          tags: [
            { name: 'Medium', color: 'warning' },
            { name: 'High', color: 'danger' },
          ],
        },
        {
          userId: 5,
          subData: 'completed',
          title:
            'laboriosam mollitia et enim quasi adipisci quia provident illum',
          tags: [{ name: 'Medium', color: 'warning' }],
        },
        {
          userId: 6,
          subData: 'completed',
          title: 'qui ullam ratione quibusdam voluptatem quia omnis',
          tags: [
            { name: 'Medium', color: 'warning' },
            { name: 'High', color: 'danger' },
          ],
        },
        {
          userId: 7,
          subData: 'completed',
          title: 'illo expedita consequatur quia in',
          tags: [
            { name: 'Medium', color: 'warning' },
            { name: 'Update', color: 'info' },
          ],
        },
        {
          userId: 8,
          subData: 'completed',
          title: 'quo adipisci enim quam ut ab',
          tags: [
            { name: 'Medium', color: 'warning' },
            { name: 'Update', color: 'info' },
          ],
        },
        {
          userId: 9,
          subData: 'completed',
          title: 'molestiae perspiciatis ipsa',
          tags: [{ name: 'Medium', color: 'warning' }],
        },
        {
          userId: 10,
          subData: 'Deleted',
          title: 'illo est ratione doloremque quia maiores aut',
          tags: [{ name: 'Medium', color: 'warning' }],
        },
        {
          userId: 11,
          subData: 'Deleted',
          title: 'vero rerum temporibus dolor',
          tags: [{ name: 'Medium', color: 'warning' }],
        },
        {
          userId: 12,
          subData: 'Deleted',
          title: 'ipsa repellendus fugit nisi',
          tags: [{ name: 'Medium', color: 'warning' }],
        },
        {
          userId: 13,
          subData: 'Deleted',
          title: 'et doloremque nulla',
          tags: [{ name: 'Medium', color: 'warning' }],
        },
        {
          userId: 14,
          subData: 'Deleted',
          title: 'repellendus sunt dolores architecto voluptatum',
          tags: [{ name: 'Medium', color: 'warning' }],
        },
        {
          userId: 15,
          subData: 'my-task',
          title: 'ab voluptatum amet voluptas',
          tags: [{ name: 'Medium', color: 'warning' }],
        },
        {
          userId: 16,
          subData: 'my-task',
          title: 'accusamus eos facilis sint et aut voluptatem',
          tags: [{ name: 'Medium', color: 'warning' }],
        },
        {
          userId: 17,
          subData: 'my-task',
          title: 'quo laboriosam deleniti aut qui',
          tags: [{ name: 'Medium', color: 'warning' }],
        },
        {
          userId: 18,
          subData: 'my-task',
          title: 'dolorum est consequatur ea mollitia in culpa',
          tags: [
            { name: 'Medium', color: 'warning' },
            { name: 'Low', color: 'success' },
          ],
        },
        {
          userId: 19,
          subData: 'my-task',
          title: 'molestiae ipsa aut voluptatibus pariatur dolor nihil',
          tags: [
            { name: 'Medium', color: 'warning' },
            { name: 'Low', color: 'success' },
          ],
        },
        {
          userId: 20,
          subData: 'my-task',
          title: 'ullam nobis libero sapiente ad optio sint',
          tags: [
            { name: 'Medium', color: 'warning' },
            { name: 'Low', color: 'success' },
          ],
        },
        {
          userId: 21,
          subData: 'my-task',
          title: 'suscipit repellat esse quibusdam voluptatem incidunt',
          tags: [
            { name: 'Medium', color: 'warning' },
            { name: 'Low', color: 'success' },
          ],
        },
        {
          userId: 22,
          subData: 'my-task',
          title: 'distinctio vitae autem nihil ut molestias quo',
          tags: [
            { name: 'Medium', color: 'warning' },
            { name: 'Low', color: 'success' },
          ],
        },
        {
          userId: 23,
          subData: 'my-task',
          title: 'et itaque necessitatibus maxime molestiae qui quas velit',
          tags: [
            { name: 'Medium', color: 'warning' },
            { name: 'Low', color: 'success' },
          ],
        },
        {
          userId: 24,
          subData: 'my-task',
          title: 'adipisci non ad dicta qui amet quaerat doloribus ea',
          tags: [
            { name: 'Medium', color: 'warning' },
            { name: 'Low', color: 'success' },
          ],
        },
        {
          userId: 25,
          subData: 'my-task',
          title: 'voluptas quo tenetur perspiciatis explicabo natus',
          tags: [
            { name: 'Medium', color: 'warning' },
            { name: 'Low', color: 'success' },
          ],
        },
      ],
    };
  },
  computed: {
    filterData() {
      return this.todoData.filter((item) => {
        const filterBySearch = item.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1;

        if (this.$route.name === 'todo-filter') {
          return (
            item.subData
              .toLowerCase()
              .indexOf(this.$route.params.filter.toLowerCase()) > -1
            && filterBySearch
          );
        } if (this.$route.name === 'todo-tag') {
          const todoResult = item.tags.filter(
            (tag) => tag.name
              .toLowerCase()
              .indexOf(this.$route.params.tag.toLowerCase()) > -1,
          );
          return todoResult.length !== 0 && filterBySearch;
        }
        return (
          filterBySearch
        );
      });
    },
    search: {
      get() {
        return this.$route.query.q || '';
      },
      set(newValue) {
        if (newValue) {
          this.$router
            .push({ query: { q: newValue, sort: this.$route.query.sort } })
            .catch(() => {});
        } else {
          this.$router
            .push({ query: { sort: this.$route.query.sort } })
            .catch(() => {});
        }
        // return newValue
      },
    },
  },
  watch: {
    $route(to) {
      // check seach value
      this.search = to.query.q || '';

      if (to.query.sort === 'title-asc') {
        this.todoData.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        });
      } else if (to.query.sort === 'title-dsc') {
        this.todoData.sort((a, b) => {
          if (a.title > b.title) {
            return -1;
          }
          if (a.title < b.title) {
            return 1;
          }
          return 0;
        });
      } else if (to.query.sort === undefined) {
        this.todoData.sort((a, b) => {
          if (a.userId < b.userId) {
            return -1;
          }
          return 1;
        });
      }
    },
  },
};
</script>

<style lang="css">
/* .sidebar-content{

  } */
</style>
