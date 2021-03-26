<template>
  <div id="app">
    <div class="user-list">
			<h1 class="user-title">Рейтинг пользователей:</h1>
			<img
				src="@/assets/sort.svg"
				alt=""
				class="user-sorting"
				@click="sortData" />
		</div>
		<div
			v-for="(user, index) in sortedData"
			:key="index"
			class="user-item">

			<user-item
				:user="user"
				@show-popup="showPopup" />
		</div>
		<user-popup
			v-if="isPopupVisible !== null"
			:user="isPopupVisible"
			@close-popup="closePopup" />
  </div>
</template>

<script>
import { apiRequest } from '@/services/UserService.js'
import UserItem from "@/components/UserItem.vue";
import UserPopup from '@/components/UserPopup.vue';


export default {
  name: "App",
  components: {
		UserItem,
		UserPopup
	},
	data() {
		return {
				data: [],
				isSorted: true,
				isPopupVisible: null
		}
	},
	async created() {
		this.data = await apiRequest();
	},
	methods: {
			sortData() {
				this.isSorted = !this.isSorted;
			},
			showPopup(item) {
        this.isPopupVisible = item;
      },
      closePopup() {
        this.isPopupVisible = null;
      }
	},
  computed: {
			sortedData() {
				const sortData = [...this.data];
				sortData.sort((a, b) => a.rating > b.rating ? -1 : 1);

				for (let i = 0; i < sortData.length; i++) {
					sortData[i] = {
						...sortData[i],
						score: i + 1,
					};
				}

				if (!this.isSorted) {
					sortData.reverse();
				}

				return sortData;
			},
	}

}
</script>

<style lang="scss">
// property
$shadow: rgba(0, 0, 0, 0.2);
$border: rgba(44, 62, 80, 0.67);
$hover: rgba(0, 0, 0, 0.07);
$main: #2c3e50;
$background: #fafafa;

#app {
  max-width: 600px;
  margin: 0 auto;
  font-family: Avenir, sans-serif;
  font-style: normal;
  font-weight: normal;
  color: $main;
	padding: 15px 0;
}

.user {
	&-list {
		display: flex;
		justify-content: space-between;
		margin-bottom: 25px;
	}
	&-title {
		font-size: 24px;
		line-height: 34px;
		margin: 0;
		font-weight: normal;
	}
	&-sorting {
		border: 1px solid $border;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 11px 8px;
		&:hover {
			background: $hover;
			cursor: pointer;
		}
		&:active {
			background: $shadow;
		}
	}
	&-item {
		margin-bottom: 5px;
    padding: 10px;
		cursor: pointer;
		&:hover {
				background: $hover;
				border-radius: 10px;
			}
	}
}

</style>
