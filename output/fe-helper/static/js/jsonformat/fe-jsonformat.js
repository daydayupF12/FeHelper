baidu.jsonformat=(function(){var a=function(){$("#btnFormat").click(function(d){var c=$.trim($("#jsonSource").val());JsonFormatEntrance.clear();JsonFormatEntrance.format(c)})};var b=function(){$(function(){a()})};return{init:b}})();baidu.jsonformat.init();