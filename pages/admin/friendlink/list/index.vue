<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="con">
    <v-container>
      <v-layout row wrap fill-height justify-end>
        <v-flex xs6 sm3 md1>
          <v-btn color="primary" title="刷新" @click="refresh()">
            刷新 <br />
            <v-icon small>refresh</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :pagination.sync="pagination"
      :items="desserts"
      :loading="loading"
      hide-actions
      select-all
      class="elevation-1"
    >
      <template v-slot:no-data>
        <p class="text-md-center teal--text">
          已经找遍了，再怎么找也找不到啦！
        </p>
      </template>
      <template v-slot:headers="props">
        <tr>
          <th>
            <v-checkbox
              :input-value="props.all"
              :indeterminate="props.indeterminate"
              primary
              hide-details
              @click.stop="toggleAll"
            ></v-checkbox>
          </th>
          <th
            v-for="header in props.headers"
            :key="header.text"
            :class="[
              'column sortable',
              pagination.descending ? 'desc' : 'asc',
              header.value === pagination.sortBy ? 'active' : ''
            ]"
            @click="changeSort(header.value)"
          >
            <v-icon small>arrow_upward</v-icon>
            {{ header.text }}
          </th>
        </tr>
      </template>
      <template slot="items" slot-scope="props">
        <tr :active="props.selected">
          <td class="text-xs-center" @click="props.selected = !props.selected">
            <v-checkbox
              :input-value="props.selected"
              primary
              hide-details
            ></v-checkbox>
          </td>
          <td class="text-xs-center">
            <v-avatar size="32px" color="grey lighten-4">
              <v-img
                :lazy-src="props.item.avatar"
                :src="props.item.avatar"
                alt="avatar"
              ></v-img>
            </v-avatar>
          </td>
          <td class="text-xs-center">{{ props.item.friendName }}</td>
          <td class="text-xs-center">{{ props.item.link }}</td>
          <td class="text-xs-center">{{ props.item.friendInfo }}</td>
          <td class="text-xs-center">{{ props.item.color }}</td>
          <td class="text-xs-center">
            <v-layout justify-center class="mb-2">
              <v-btn
                icon
                flat
                color="primary"
                title="编辑"
                @click="handleEdit(props.item)"
              >
                <v-icon>create</v-icon>
              </v-btn>
              <v-btn
                icon
                flat
                color="primary"
                title="删除"
                @click="handleDelete(props.item)"
              >
                <v-icon>remove_circle</v-icon>
              </v-btn>
            </v-layout>
          </td>
        </tr>
      </template>
    </v-data-table>
    <div class="pagination text-md-right">
      <v-pagination
        v-model="pagination.page"
        circle
        color="primary"
        :length="length"
        @input="search"
      ></v-pagination>
    </div>
    <div>
      <edit-form
        :row="row"
        :alert="editFormVisible"
        @handleCancel="handleCancelEdit"
      ></edit-form>
    </div>
  </div>
</template>
<script>
import editForm from './components/form'
import { getFriendLinkList, deleteFriendLinkById } from '@/api/friendlink'

export default {
  name: 'FriendLink',
  layout: 'admin',
  components: { editForm },
  data() {
    return {
      searchData: {},
      selected: [],
      loading: true,
      headers: [
        { text: '头像', value: 'avatar' },
        { text: '名称', value: 'friendName' },
        { text: '链接', value: 'link' },
        { text: '介绍', value: 'friendInfo' },
        { text: '风格', value: 'color' },
        { text: '操作', value: '' }
      ],
      desserts: [],
      pagination: {
        descending: true,
        page: 1,
        rowsPerPage: 10, // -1 for All
        sortBy: '',
        totalItems: 2
      },
      row: {},
      dialogVisible: false,
      addFormVisible: false,
      editFormVisible: false,
      title: ''
    }
  },
  computed: {
    length: {
      get: function() {
        return this.pagination.totalItems
          ? Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
          : 0
      },
      set: function() {}
    }
  },
  async asyncData({ app, query, error }) {
    const res = await app.$axios.$request(getFriendLinkList())
    if (res.code === '200') {
      const pagination = {}
      pagination.page = res.data.currentPage
      pagination.rowsPerPage = res.data.pageSize
      pagination.totalItems = res.data.total
      return { desserts: res.data.records, pagination: pagination }
    } else {
      return error({ statusCode: res.code, message: res.message })
    }
  },
  methods: {
    search() {
      const searchData = this.searchData
      searchData.pageSize = this.pagination.rowsPerPage
      searchData.pageNumber = this.pagination.page
      this.$axios
        .$request(getFriendLinkList(searchData))
        .then(res => {
          if (res.code === '200') {
            this.desserts = res.data.records
            this.pagination.page = res.data.currentPage
            this.pagination.rowsPerPage = res.data.pageSize
            this.pagination.totalItems = res.data.total
          } else {
            this.$swal({
              text: '拉取角色列表失败',
              type: 'error',
              toast: true,
              position: 'top',
              showConfirmButton: false,
              timer: 3000
            })
          }
        })
        .catch(e => {
          this.$swal({
            text: e.message,
            type: 'error',
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000
          })
        })
        .finally(() => {
          this.loading = false
        })
    },
    refresh(obj) {
      this.$axios.$request(getFriendLinkList(obj)).then(res => {
        this.desserts = res.data.records
        this.pagination.page = res.data.currentPage
        this.pagination.rowsPerPage = res.data.pageSize
        this.pagination.totalItems = res.data.total
      })
    },
    toggleAll() {
      if (this.selected.length) this.selected = []
      else this.selected = this.desserts.slice()
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    },
    handleCancelEdit() {
      this.editFormVisible = false
    },
    handleEdit(row) {
      this.editFormVisible = true
      this.row = { ...row }
    },
    handleDelete(row) {
      this.$swal({
        title: '确定要删除吗？',
        text: '友尽了嘛？',
        type: 'warning',
        showCancelButton: true
      }).then(result => {
        if (result.value) {
          this.$axios
            .$request(deleteFriendLinkById(row.id))
            .then(res => {
              this.loading = false
              if (res.code === '200' && res.data) {
                this.$swal({
                  title: '删除成功',
                  text: '该友链已经删除',
                  type: 'success'
                })
                this.refresh()
              } else {
                this.$swal({
                  title: '删除失败',
                  text: res.message,
                  type: 'error'
                })
              }
            })
            .catch(e => {
              this.loading = false
              this.$swal({
                text: e.message,
                type: 'error',
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000
              })
            })
        }
      })
    },
    handleDeleteSelected(selected) {}
  }
}
</script>
<style lang="less" scoped>
.con {
  padding: 0 20px;
}

.layout > .flex {
  padding: 8px;
}

.v-icon {
  color: #2196f3;
  cursor: pointer;
}

.img {
  width: 30px;
  height: 30px;
}

.v-image__image {
  width: 30px;
  height: 30px;
}

.text-success {
  color: forestgreen;
  font-weight: bold;
  padding: 0 12px !important;
}

.text-error {
  color: #dc6752;
  font-weight: bold;
  padding: 0 12px !important;
}

.text-warning {
  color: #dca173;
  font-weight: bold;
  padding: 0 12px !important;
}

.pagination {
  margin: 20px;
}
</style>
