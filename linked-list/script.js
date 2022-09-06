function Linked_list(){
  this.head = null
}

function Node(value){
  this.value = value,
  this.next = null
}

  
Linked_list.prototype.add = function(value){
  if(this.head === null) this.head = new Node(value)
  else{
    let refeNode = this.head
    while(refeNode.next !== null){
      refeNode = refeNode.next
    }
    refeNode.next = new Node(value)
  }
}


let list = new Linked_list;


list.add('85kg')
list.add('80kg')
list.add('75kg')

console.log(list)