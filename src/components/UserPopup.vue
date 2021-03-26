<template>
	<div class="user-popup">
		<div class="user-popup-item">
			<div class="user-popup-first">
				<div class="user-popup-title">
					Профиль пользователя:
				</div>
				<img
					src="@/assets/close.svg"
					alt=""
					class="user-popup-close"
					@click="closePopup"
					>
			</div>
			<div class="user-popup-second">
				<img
					:src="user.avatar"
					alt=""
					class="user-popup-avatar"
					:class="{
						userFirst: user.score === 1,
						userSecond: user.score === 2,
						userThird: user.score === 3
					}"
					/>
				<ul class="user-popup-info">
					<li>Имя:</li>
					<li>{{ user.name }}</li>
					<li>Баллы:</li>
					<li>{{ user.rating }}</li>
					<li>Позиция в рейтинге:</li>
					<li>{{ user.score }}</li>
				</ul>
			</div>
			<div class="user-popup-desc">
				<span>О себе:</span>
				<span>{{ user.description }}</span>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'user-popup',
		props: {
			user: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		methods: {
			closePopup() {
				this.$emit('close-popup');
			}
		}
	}
</script>

<style lang="scss">
// property
$shadow: rgba(0, 0, 0, 0.2);
$hover: rgba(0, 0, 0, 0.07);

	.user-popup {
		position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: $shadow;
    display: flex;
    justify-content: center;
    align-items: center;
		&-item {
			width: 478px;
			min-height: 281px;
			padding: 15px 10px 15px 25px;
			background: white;
		}
		&-first, &-second, &-desc {
			display: flex;
		}
		&-first{
			justify-content: space-between;
		}
		&-second {
			justify-content: flex-start;
			align-items: center;
			margin-top: 25px;
		}
		&-desc {
			flex-direction: column;
			font-size: 18px;
		}
		&-title {
			font-size: 24px;
		}
		&-close {
			padding: 10px;
			cursor: pointer;
			&:hover {
				background: $hover;
				border-radius: 20px;
			}
		}
		&-avatar {
			width: 129px;
			border-radius: 100%;
		}
		&-info {
			list-style-type: none;
			font-size: 18px;
		}
	}
</style>
