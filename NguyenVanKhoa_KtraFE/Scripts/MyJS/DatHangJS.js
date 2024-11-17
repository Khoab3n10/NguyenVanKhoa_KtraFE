function getValue(id) {
    return document.getElementById(id).value.trim();
}
function showError(key, mess) {
    document.getElementById(key + '_error').innerHTML = mess;
}
function Check() {
    var flag = true;
    //Name
    var Name = getValue('iName');
    if (Name == '') {
        flag = false;
        showError('Name', 'Khong duoc de trong');
    }
    else {
        showError('Name', '');
    }
    //Phone
    var Phone = getValue('iPhone');
    if (Phone == '' || Phone < 10) {
        flag = false;
        showError('Phone', 'Khong duoc de trong, tong ky tu >=10');
    }
    else {
        showError('Phone', '');
    }
    //City
    var City = getValue('iCity');
    if (City == 'Chọn Tỉnh/Thành phố') {
        flag = false;
        showError('City', 'Khong duoc de trong');
    }
    else {
        showError('City', '');
    }
    //Distrist
    var Distrist = getValue('iDistrist');
    if (Distrist == 'Chọn Quận/Huyện') {
        flag = false;
        showError('Distrist', 'Khong duoc de trong');
    }
    else {
        showError('Distrist', '');
    }
    //Ward
    var Ward = getValue('iWard');
    if (Ward == 'Chọn Phường/Xã') {
        flag = false;
        showError('Ward', 'Khong duoc de trong');
    }
    else {
        showError('Ward', '');
    }
    //Address
    var Address = getValue('iAddress');
    if (Address == '') {
        flag = false;
        showError('Address', 'Khong duoc de trong');
    }
    else {
        showError('Address', '');
    }
    //AddressType
    if (document.getElementById('iAddressTypeCompany').checked == false && document.getElementById('iAddressTypeHome').checked == false)
    {
        flag = false;
    }
    return flag;
}
function Check2() {
    if (Check())
        alert('Đăng ký thành công');
    else
        alert('Đăng ký thất bại')
}