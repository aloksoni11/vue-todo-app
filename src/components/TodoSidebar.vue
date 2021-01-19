<template>
  <div id="sidebar">
    <b-card>
      <b-list-group>
        <b-list-group-item
          v-for="list in sidebarList"
          :key="list.name"
          :to="{ name: list.to, params: { filter: list.param } }"
        >
          {{ list.name }}
        </b-list-group-item>
      </b-list-group>
      <p class="text-muted my-4">TAGS</p>
      <b-list-group>
        <b-list-group-item
          v-for="tag in tags"
          :key="tag.name"
          :to="{ name: tag.to, params: { tag: tag.param } }"
        >
          {{ tag.name }}
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarList: [
        { name: 'My Task', to: 'todo' },
        { name: 'Important', to: 'todo-filter', param: 'important' },
        { name: 'Completed', to: 'todo-filter', param: 'completed' },
        { name: 'Deleted', to: 'todo-filter', param: 'deleted' },
      ],
      tags: [
        { name: 'Team', to: 'todo-tag', param: 'team' },
        { name: 'Low', to: 'todo-tag', param: 'low' },
        { name: 'Medium', to: 'todo-tag', param: 'medium' },
        { name: 'High', to: 'todo-tag', param: 'high' },
        { name: 'Update', to: 'todo-tag', param: 'update' },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
#sidebar {
  width: 250px;
  float: left;
}
#sidebar .sidebar-active {
  color: #fff;
}
</style>
