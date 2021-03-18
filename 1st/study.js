
class SimpleTooltip extends HTMLElement {
	// class 내에서 객체를 생성하고 초기화하기 위한 특별한 메서드
	// 생성자 에서는 보통 해당 엘리먼트에 포함된 함수를 초기화 한다.
	constructor() {
		//서브(자식) 클래스에서 상위 클래스를 호출할 때 사용
		super();

		//정확한 this 바인딩
		this._show = this._show.bind(this);
		this._hide = this._hide.bind(this);

		this.attachShadow({mode: "open"});

		this.shadowRoot.innerHTML = `
			<style>
				.tooltip-box{
					position:absolute;
					top:50%;
					left:100%;
					padding:20px;
					transform:translateY(-50%);
					border-radius:10px;
					text-align:center;
					color:#222;
				}
				.tooltip-box h3{
					font-size:18px;
				}
				.tooltip-box .content{
					margin-top:10px;
					font-size:14px;
				}
			</style>
			<div class="tooltip-box">
				<h3><slot name="title"></slot></h3>
				<div class="content"><slot name="content"></slot></div>
			</div>
        `;
	}

	// custom element가 생성될때 실행된다.
	connectedCallback() {
		//숨기고
		this._hide();

		//target 설정
		this._target = document.querySelector('[tooltip-target=' + this.id + ']');

		//mouseenter시 보이기
		this._target.addEventListener('mouseenter', this._show);

		//mouseleave시 숨기기
		this._target.addEventListener('mouseleave', this._hide);

		//bgColor로 색상 받아 적용
		this.shadowRoot.querySelector('.tooltip-box').style.backgroundColor
			= this.getAttribute('bgColor');


		//console.log(this);
		//console.log(this._target);

	}

	// custom element가 제거될때 호출된다.
	disconnectedCallback() {
		this._target.removeEventListener('mouseenter', this._show);
		this._target.removeEventListener('mouseleave', this._hide);

	}

	_show() {
		this._visible = false;
		this.style.display = 'block';
	}

	_hide() {
		this._visible = true;
		this.style.display = 'none';
	}
}

customElements.define('simple-tooltip', SimpleTooltip);