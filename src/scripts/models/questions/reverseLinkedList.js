export function reverseLinkedList(head) {
	let temp = null;
	let prev = null;
	this.tail = head;
	while (head.next) {
		temp = head.next;
		head.next = prev;
		prev = head;
		current = temp;
	}
	this.head = head;
}

export function reverseLinkedListR(head) {
	if (!head.next) {
		head;
	}
	let reverse = reverseLinkedList(head.next);
	head.next = reverse;
}
