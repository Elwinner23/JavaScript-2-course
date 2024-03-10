//https://leetcode.com/problems/add-two-numbers/

var addTwoNumbers = function(l1, l2) {
    
    let summa = 0;
    let current = new ListNode(0);
    let result = current;
    
    while(l1 || l2) {
        
        if(l1) {
            summa += l1.val;
            l1 = l1.next;
        }
        
        if(l2) {
            summa += l2.val;
            l2 = l2.next;
        }
        
        current.next = new ListNode(summa % 10);
        current = current.next;
        
        summa = summa > 9 ? 1 : 0;
    }
    
    if(summa) {
        current.next = new ListNode(sum);
    }
    
    return result.next;
};