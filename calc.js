function displayNum(n){
    result.value=result.value+n
}
function allClear()
{
    result.value=""
}
function evalExpr()
{
result.value=eval(result.value)
}
function backSpace()

{
    cur_str=result.value
    result.value=cur_str.slice(0,-1)
}