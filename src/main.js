// 创建节点
const div = dom.create('<td>12</td>');
console.log(div);

// 添加弟弟节点
dom.after(test,div);

//
const div3 = dom.create('<div id="parent"></div>')
dom.wrap(test,div3);

// 删除节点
const nodes = dom.empty(window.empty);
console.log(nodes);

// 实现写操作
dom.attr(test,'title',"hi,I'm weiranyi");
// 实现读操作
const title = dom.attr(test,'title');
// 输出到控制台
console.log(`title:${title}`);
// 写文本操作
dom.text(test,'您好，这是新的内容');
// 读取文本操作
dom.text(test);

// 改样式
dom.style(test,{border:'1px solid red',color:'blue'});
console.log(dom.style(test,'border')); // 读取border的值
dom.style(test,'border','1px solid black');

//修改样式
dom.class.add(test,'red');
dom.class.add(test,'blue');
dom.class.remove(test,'blue');
console.log(dom.class.has(test,'blue'))