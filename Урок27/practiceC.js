
// Задача:
// https://leetcode.com/problems/longest-palindromic-substring/

function isPalindrome(symbols)
{
    if (symbols.length <= 1)
    {
        return true
    }

    if (symbols[0] == symbols[symbols.length - 1])
    {
        return isPalindrome(symbols.slice(1, symbols.length - 1))
    }
  	else
    {
    	return false
  	}
}


function LongestPalindrome(symbols)
{
	let palindrome = '';
    if (isPalindrome(symbols))
    {
        palindrome = symbols
    }
    else
    {
        for (let i = 0; i <= symbols.length; i++)
        {
            for (let j = i + 1; j <= symbols.length; j++)
            {
                if ((isPalindrome(symbols.slice(i, j))) && (symbols.slice(i, j).length > palindrome.length))
                {
                    palindrome = symbols.slice(i, j)
                }
            }
        }
    }
  	return palindrome
}


let string1 = "qweewqt";
let string2 = "aggq"
let string3 = "valera"
console.log(LongestPalindrome(string1))
console.log(LongestPalindrome(string2))
console.log(LongestPalindrome(string3))


// Код на LeetCode

// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function(s) {
//     function isPalindrome(symbols)
//     {
        
//         if (symbols.length <= 1)
//         {
//             return true
//         }

//         if (symbols[0] == symbols[symbols.length - 1])
//         {
//             return isPalindrome(symbols.slice(1, symbols.length - 1))
//         }
//         else
//         {
//             return false
//         }
//     }

// 	let palindrome = '';
//     if (isPalindrome(s))
//     {
//         palindrome = s
//     }
//     else
//     {
//         for (let i = 0; i <= s.length; i++)
//         {
//             for (let j = i + 1; j <= s.length; j++)
//             {
//                 if ((isPalindrome(s.slice(i, j))) && (s.slice(i, j).length > palindrome.length))
//                 {
//                     palindrome = s.slice(i, j)
//                 }
//             }
//         }
//     }
//   	return palindrome
// };