(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-open");
	}
})();

(() => {
	const refs = {
		openMobModalBtn: document.querySelector("[mob-modal-open]"),
		closeMobModalBtn: document.querySelector("[mob-modal-close]"),
		mobModal: document.querySelector("[mob-modal]"),
	};

	refs.openMobModalBtn.addEventListener("click", toggleModal);
	refs.closeMobModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.mobModal.classList.toggle("is-open");
	}
})();
