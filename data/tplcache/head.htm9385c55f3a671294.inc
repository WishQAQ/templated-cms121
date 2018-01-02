<?php
$z[0]=Array("field","(@me==\"\")? @me=\" class='current' \":@me=\"\";",175,267);
$z[0][4]=array();
$z[0][4]['name']="typeid";
$z[0][4]['runphp']="yes";
$z[1]=Array("channelartlist","\r\n        <li><a class='{dede:field.currentstyle/}' href='{dede:field name='typeurl'/}'>{dede:field name='typename'/}</a></li>\r\n        ",302,517);
$z[1][4]=array();
$z[1][4]['typeid']="1,2";
$z[1][4]['currentstyle']="current";
$z[2]=Array("channelartlist","\r\n        <li><a class='{dede:field.currentstyle/}' href='{dede:field name='typeurl'/}'>{dede:field name='typename'/}</a></li>\r\n        ",552,772);
$z[2][4]=array();
$z[2][4]['typeid']="13,11,12";
$z[2][4]['currentstyle']="current";
$z[3]=Array("global","",821,847);
$z[3][4]=array();
$z[3][4]['name']="cfg_webname";
$z[4]=Array("global","",887,913);
$z[4][4]=array();
$z[4][4]['name']="cfg_webname";
$z[5]=Array("channelartlist","\r\n          <li><a {dede:field name=typeid runphp=\"yes\"}\r\nglobal \$dsql;\r\n\$sql = \"SELECT id From `#@__arctype` WHERE reid='@me' And ishidden<>1 order by sortrank asc limit 0, 100 \";\r\n\$row = \$dsql->GetOne(\$sql);\r\n            @me=is_array(\$row)?'href=\"javascript:void(0);\"':'';\r\n            {/dede:field} href=\"{dede:field name='typeurl'/}\">{dede:field name='typename'/}<i {dede:field name=typeid runphp=\"yes\"}\r\nglobal \$dsql;\r\n\$sql = \"SELECT id From `#@__arctype` WHERE reid='@me' And ishidden<>1 order by sortrank asc limit 0, 100 \";\r\n\$row = \$dsql->GetOne(\$sql);\r\n            @me=is_array(\$row)?'class=\"touch-arrow-down\"':'style=\"display:none\"';\r\n            {/dede:field}></i></a>\r\n            <ul>\r\n              {dede:channel type='son' noself='yes'}\r\n              <li><a href='[field:typeurl/]'>[field:typename/]</a></li>\r\n              {/dede:channel}\r\n            </ul>\r\n          </li>\r\n          ",1169,2128);
$z[5][4]=array();
$z[5][4]['typeid']="top";
$z[6]=Array("channelartlist","\r\n          <li><a {dede:field name=typeid runphp=\"yes\"}\r\nglobal \$dsql;\r\n\$sql = \"SELECT id From `#@__arctype` WHERE reid='@me' And ishidden<>1 order by sortrank asc limit 0, 100 \";\r\n\$row = \$dsql->GetOne(\$sql);\r\n            @me=is_array(\$row)?'href=\"javascript:void(0);\"':'';\r\n            {/dede:field} href=\"{dede:field name='typeurl'/}\">{dede:field name='typename'/}<i {dede:field name=typeid runphp=\"yes\"}\r\nglobal \$dsql;\r\n\$sql = \"SELECT id From `#@__arctype` WHERE reid='@me' And ishidden<>1 order by sortrank asc limit 0, 100 \";\r\n\$row = \$dsql->GetOne(\$sql);\r\n            @me=is_array(\$row)?'class=\"touch-arrow-down\"':'style=\"display:none\"';\r\n            {/dede:field}></i></a>\r\n            <ul>\r\n              {dede:channel type='son' noself='yes'}\r\n              <li><a href='[field:typeurl/]'>[field:typename/]</a></li>\r\n              {/dede:channel}\r\n            </ul>\r\n          </li>\r\n          ",2626,3585);
$z[6][4]=array();
$z[6][4]['typeid']="top";
$z[7]=Array("global","",3711,3736);
$z[7][4]=array();
$z[7][4]['name']="cfg_cmsurl";

?>