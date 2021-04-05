<template>
	<transition name="modal" appear>
		<div class="modal-wrap" @click.self="$emit('close')">
			<div class="modal-inner">
				<div class="modal-header">
					<slot name="title">
						<h2>제목</h2>
					</slot>
				</div>
				<div class="modal-content">
					<div class="top">
						<slot name="date">
							<span>2021-04-01</span>
						</slot>
						<slot name="name">
							<span>이름</span>
						</slot>
					</div>
					<slot name="img">
						<img src="../assets/img/sample.png" alt="">
					</slot>
					<slot name="cont">
						<p>내용</p>
					</slot>
				</div>
				<div class="modal-footer">
					<slot name="footer">
						<button @click="$emit('close')">확인</button>
					</slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: "modal"
}
</script>

<style lang="scss">
.modal {
	&-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		z-index: 30;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
	}
	&-inner {
		width:50%;
		max-height:70vh;
		overflow-y:scroll;
		padding:20px;
		background: #fff;
		border-radius: 10px;
	}
	&-header {
		padding-bottom:10px;
		h2{
			font-size:20px;
			font-weight:700;
		}
	}
	&-content {
		padding: 10px;
		border-top:1px solid #939597;
		.top{
			display:flex;
			justify-content:space-between;
			align-items:center;
			padding-bottom:10px;
			span{
				font-size:12px;
			}
		}
		img{
			width:100%;
		}
		p{
			margin-top:10px;
			font-size:14px;
		}
	}
	&-footer {
		padding-top:10px;
		border-top:1px solid #939597;
		text-align: right;
		button{
			padding:5px 10px;
			background:#000;
			border:none;
			color:#fff;
			border-radius:5px;
			cursor:pointer;
		}
	}
}

.modal-enter-active, .modal-leave-active {
	transition: opacity 0.3s;
	.modal-window {
		transition: opacity 0.3s, transform 0.3s;
	}
}

.modal-leave-active {
	transition: opacity 0.3s ease 0.3s;
}

.modal-enter, .modal-leave-to {
	opacity: 0;
	.modal-window {
		opacity: 0;
		transform: translateY(-20px);
	}
}
</style>