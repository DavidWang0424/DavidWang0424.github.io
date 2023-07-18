$(document).ready(function () {
  // 默认选中第一个日期
  $("#dates a:first").addClass("active");

  // 显示地图和事件列表
  showMap($("#dates a:first").data("date"));
  showEvents($("#dates a:first").data("date"));

  // 点击日期切换地图和事件列表
  $("#dates a").click(function () {
    // 取消其他日期的选中状态
    $("#dates a").removeClass("active");

    // 选中当前日期
    $(this).addClass("active");

    // 显示地图和事件列表
    var date = $(this).data("date");
    showMap(date);
    showEvents(date);

    return false;
  });
});

function showMap(date) {
  // 根据日期显示不同的地图
  var mapUrl = "http://mywebsite.com/maps/" + date + ".png";
  $("#map").html('<img src="' + mapUrl + '" />');
}

function showEvents(date) {
  // 根据日期显示不同的事件
  var events = {
    "2022-04-24": ["到达深圳"],
    "2023-04-26": ["到达广州"],
    "2023-04-27": ["到达安丘"],
    "2023-05-02": ["到达济南"],
  };

  var eventList = "";
  $.each(events[date], function (index, value) {
    eventList += '<li><a href="#">' + value + "</a></li>";
  });

  $("#events ol").html(eventList);
}
