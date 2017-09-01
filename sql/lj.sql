--登录界面
USE lj;
CREATE TABLE lj_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32)
);

INSERT INTO lj_login VALUES
(null, 'liuliu', '666666'),
(null, 'qiqi', '777777');

--注册界面
USE lj;
CREATE TABLE lj_address(
	id	INT PRIMARY KEY AUTO_INCREMENT,
	uid VARCHAR(32),
    uip VARCHAR(32),
	uphone  VARCHAR(16)
);
INSERT INTO lj_address VALUES
('null','六六','666666','13207109876');



--分页查询
SET NAMES UTF8;
DROP DATABASE IF EXISTS lj;
CREATE DATABASE lj CHARSET=UTF8;
USE lj;

/**产品信息表**/
CREATE TABLE lj_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pname VARCHAR(64),
  price FLOAT(8,2),
  ptext VARCHAR(100),
  psun  VARCHAR(50),
  pte  VARCHAR(50),
  pyear  VARCHAR(30),
  ptimes  VARCHAR(30),
  pii VARCHAR(30),
  pic VARCHAR(32)
);
INSERT INTO lj_product VALUES(null,'保利心语二期  3室2厅 ','188万','泰然南湖玫瑰湾二期 | 1室1厅 | 56.98平米 | 南 北 | 简装 | 有电梯','中楼层(共14层)2010年建板楼-珞狮南路','79人关注 / 共32次带看 / 4个月以前发布','房本满5年','随时看房','单价15792/平米','img/d1.jpg');
INSERT INTO lj_product VALUES(null,'红光小区 老证中间楼层 简装三房 朝南采光好 看... ','112万','红光小区| 3室1厅 |74.11平米 | 南 北 | 简装 |简装','中楼层(共8层)1998年建板楼-长港路','6人关注 / 共0次带看 /4天以前发布','房本满5年','距离2号线长港路站831米','单价15792/平米','img/d2.jpg');
INSERT INTO lj_product VALUES(null,'玫瑰二期标准一室一厅，出租装修，有钥匙','188万','泰然南湖玫瑰湾二期 | 1室1厅 | 56.98平米 | 南 北 | 简装 | 有电梯','中楼层(共14层)2010年建板楼-珞狮南路','79人关注 / 共32次带看 / 4个月以前发布','房本满5年','随时看房','单价15792/平米','img/d3.jpg');
INSERT INTO lj_product VALUES(null,'百步亭怡康苑 精装复式 采光好 南北通透 交通便利','250万','红光小区| 3室1厅 |74.11平米 | 南 北 | 简装 |简装','中楼层(共8层)1998年建板楼-长港路','6人关注 / 共0次带看 /4天以前发布','房本满5年','距离2号线长港路站831米','单价15792/平米','img/d4.jpg');
INSERT INTO lj_product VALUES(null,'红光小区 正规两居室 中间楼层 装修好 满5唯一！','95万','红光小区 | 2室1厅 | 70.05平米 | 南 北 | 简装 | 无电梯','中楼层(共7层)1998年间建板楼-长港路','69人关注 / 共25次带看 / 30天以前发布','房本满5年','','单价15000','img/d5.jpg');
INSERT INTO lj_product VALUES(null,'南国一方水5楼大四房 业主出国诚心出售观光电梯','340万','南国明珠二期 | 4室2厅 | 186.05平米 | 南 北 | 毛坯 | 有电梯','高楼层(共6层)2008年建板楼-王家湾','45人关注 / 共83次带看 / 9个月以前发布','房本满5年','','单价15000','img/d5.jpg');
INSERT INTO lj_product VALUES(null,'保利心语二期  3室2厅 ','188万','泰然南湖玫瑰湾二期 | 1室1厅 | 56.98平米 | 南 北 | 简装 | 有电梯','中楼层(共14层)2010年建板楼-珞狮南路','79人关注 / 共32次带看 / 4个月以前发布','房本满5年','随时看房','单价15792/平米','img/d1.jpg');

--分页查询
SELECT * FROM lj_product LIMIT 0,10;
SELECT * FROM lj_product LIMIT 10,20;
SELECT * FROM lj_product LIMIT 20,30;