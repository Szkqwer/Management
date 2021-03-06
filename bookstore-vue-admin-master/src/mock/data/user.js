import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '张某某'
  }
];

const Users = [];
let bookName = ['五年高考三年模拟英语（全国一卷）','我不怕这漫长黑夜','假如给我三天光明','福尔摩斯探案集','华夏万卷字帖']
for (let i = 0; i < 5; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    sex: Mock.Random.integer(0, 1),
    bookName: bookName[i],
    bookNum: Mock.Random.integer(1, 10)
  }));
}

export { LoginUsers, Users };
