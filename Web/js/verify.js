function moveFocus(event) {
    const input = event.target;
    const value = input.value;

    // Kiểm tra nếu giá trị nhập vào là một chữ số
    if (!/^\d$/.test(value)) {
        input.value = ''; // Nếu không phải số, xóa nội dung
        return;
    }

    // Tự động chuyển focus sang ô input tiếp theo
    let nextInput = input.nextElementSibling;
    if (nextInput && nextInput.tagName === 'INPUT') {
        nextInput.focus();
    }
}

function moveBack(event) {
    // Kiểm tra phím nhấn có phải là backspace không
    if (event.key === 'Backspace') {
        const input = event.target;
        const value = input.value;

        // Nếu ô input hiện tại không có giá trị, tự động di chuyển focus về ô trước đó
        if (value === '') {
            let prevInput = input.previousElementSibling;
            if (prevInput && prevInput.tagName === 'INPUT') {
                prevInput.focus();
            }
        }
    }
}

function moveFocus(event) {
    const input = event.target;
    const value = input.value;

    // Kiểm tra nếu giá trị nhập vào là một chữ số
    if (!/^\d$/.test(value)) {
        input.value = ''; // Nếu không phải số, xóa nội dung
        return;
    }

    // Tự động chuyển focus sang ô input tiếp theo
    let nextInput = input.nextElementSibling;
    if (nextInput && nextInput.tagName === 'INPUT') {
        nextInput.focus();
    }
}

function checkInput() {
    const inputs = document.querySelectorAll('.verify-cell input');
    const verifyButton = document.getElementById('verifyBtn');
    
    // Kiểm tra nếu tất cả các ô input đều có giá trị
    const allFilled = Array.from(inputs).every(input => input.value !== '');
    
    // Nếu tất cả các ô đã có giá trị, bật nút verify
    if (allFilled) {
        verifyButton.disabled = false;
        verifyButton.classList.add('active'); // Bật kiểu sáng cho nút
    } else {
        verifyButton.disabled = true;
        verifyButton.classList.remove('active'); // Tắt kiểu sáng cho nút
    }
}

