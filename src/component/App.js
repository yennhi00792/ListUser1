
import React, { Component } from 'react';
import '../App.css';
import Adduser from './Adduser';
import Header from './Header';
import List from './List';
import Search from './Search';
import Datauser from './Data.json';



class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      hienthiForm: true,
      data: Datauser,
      searchNd: '',
      editUserStatus: false,
      userEditObject: {} // khai baso 1 bieens state để luu đối tượng
    }
  }
  //bo-con props, con-bo state

  // thongbao = () => {
  //   alert('ok');
  // }
  doitrangThai = () => {
    //sst 
    this.setState({
      hienthiForm: !this.state.hienthiForm,
    });
  }

  checkConnect = (dl) => {
    //alert('kết nối rồi');
    // console.log('dữ liệu bố nhận được là '+dl);
    this.setState({ searchNd: dl })
  }

  //hàm lấy thông tin từ adduser
  getNewUser = (name, tel, Permission) => {
    // console.log(name);
    // console.log(tel);
    // console.log(Permission);
    var item = {};//ban đầu là đói tượng rỗng
    item.id = '';
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;
    //console.log(item);
    //khai báo 1 biết mới để lưu trữ dữ liệu
    var newItem = this.state.data;
    newItem.push(item);
    console.log(newItem);
    //cập nhật state sst
    this.setState({ data: newItem });

  }
  //hàm lấy thong tin cần sửa
  // editUser = (info) => {
  //   //alert("đã kết nối");
  //   // alert("thông tin nhận được: " + info)
  // }
  editUser = (info) => {
    this.setState({
      userEditObject: info
    });
  }

  //ham thay đổi trạng thái form sửa
  changEditUserForm = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus,
    });
  }
  //hàm lấy thông tin sửa từ Search gửi lên
  getEditInfoApp = (info) => {
    //alert("thông tin đã sửa xong "+info.name);
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    })
  }

  //hàm lấy id xóa từ List gửi lên
  deleteUserInfo = (idUser) => {
    // console.log(idUser);

    //cách sử dụng hàm filter
    var manga = [1, 2, 3, 4, 5];
    var x = 3;
    manga = manga.filter(abc => abc != x)
    console.log(manga);
    var tempData = this.state.data;
    tempData = tempData.filter(item => item.id != idUser);
    this.setState({
      data: tempData
    });
  }


  render() {
    //console.log(this.state.data);
    var ketqua = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchNd) !== -1) {
        ketqua.push(item)
      }
    })
    //console.log(ketqua);


    return (
      <div >
        <Header />
        <div className='container'>
          <div className='row'>
            <Search
              checkConnectProps={(dl) => this.checkConnect(dl)}
              ketNoi={() => { this.doitrangThai() }}
              editUserStatus={this.state.editUserStatus}
              changEditUserForm={() => this.changEditUserForm()}
              userEditObject={this.state.userEditObject}
              getEditInfoApp={(info) => this.getEditInfoApp(info)}
            />
            <List
              dataUserProps={ketqua}
              //dataUserProps={this.state.data}
              edit={(info) => this.editUser(info)}
              changEditUserForm={() => this.changEditUserForm()}
              deleteUserInfo={(idUser) => this.deleteUserInfo(idUser)}
            />
            <Adduser hienthiForm={this.state.hienthiForm}
              add={(name, tel, Permission) => this.getNewUser(name, tel, Permission)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
