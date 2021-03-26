<template>
	<div class="user-card" @click="showPopup(user)">
		<img :src="user.avatar"
					alt=""
					class="user-avatar-sm"
					:class="{
						userFirst: user.score === 1,
						userSecond: user.score === 2,
						userThird: user.score === 3
					}"
					/>
		<div class="user-info">
			<div>
				Пользователь:
			</div>
			<div class="user-name">
				{{ user.name }}
			</div>
		</div>
		<div class="user-score">
			<img
				src="@/assets/star.svg"
				alt=""
				class="user-star">
			<div class="user-rating">
				{{ user.rating }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'user-item',
	props: {
		user: {
      type: Object,
      default: () => {
        return {}
      }
    }
	},
	methods: {
		showPopup(user){
			this.$emit('show-popup', user);
		}
	}
};
</script>

<style lang="scss">
$bronze: #795548;
$silver: #90a4ae;
$gold: #fdd835;

	.user {
		&-card {
			display: flex;
			align-items: center;
		}
		&-avatar-sm {
			border-radius: 100%;
			width: 60px;
		}
		&-info {
			margin-left: 20px;
			flex-basis: 80%;
			font-size: 18px;
		}
		&-score {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		&-rating {
			font-size: 18px;
			padding-left: 7px;
			padding-top: 2px;
		}
		&First {
			border: 4px solid $gold;
		}
		&Second {
			border: 4px solid $silver
		}
		&Third {
			border: 4px solid $bronze
		}
	}
</style>
