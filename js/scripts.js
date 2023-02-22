$(function () {
    $(".imgItem1").show();
    $(".imgItem2").hide();
    $(".imgItem3").hide();
    $(".imgItem4").hide();
    $(".btnItem1").addClass("active");
    $(".btnItem2").removeClass("active");
    $(".btnItem3").removeClass("active");
    $(".btnItem4").removeClass("active");

    $(".groupBox1").show();
    $(".groupBox2").hide();
    $(".groupBox3").hide();
    $(".group1").addClass("active");
    $(".group2").removeClass("active");
    $(".group3").removeClass("active");

    $(".groupNext1").hide();
    $(".groupNext2").hide();
    $(".groupNext3").hide();
    $(".groupPrev1").show();
    $(".groupPrev2").hide();
    $(".groupPrev3").hide();

    $(".btnItem1").click(function () {
        $(".imgItem1").show();
        $(".imgItem2").hide();
        $(".imgItem3").hide();
        $(".imgItem4").hide();
        $(".btnItem1").addClass("active");
        $(".btnItem2").removeClass("active");
        $(".btnItem3").removeClass("active");
        $(".btnItem4").removeClass("active");
    });
    $(".btnItem2").click(function () {
        $(".imgItem1").hide();
        $(".imgItem2").show();
        $(".imgItem3").hide();
        $(".imgItem4").hide();
        $(".btnItem1").removeClass("active");
        $(".btnItem2").addClass("active");
        $(".btnItem3").removeClass("active");
        $(".btnItem4").removeClass("active");
    });
    $(".btnItem3").click(function () {
        $(".imgItem1").hide();
        $(".imgItem2").hide();
        $(".imgItem3").show();
        $(".imgItem4").hide();
        $(".btnItem1").removeClass("active");
        $(".btnItem2").removeClass("active");
        $(".btnItem3").addClass("active");
        $(".btnItem4").removeClass("active");
    });
    $(".btnItem4").click(function () {
        $(".imgItem1").hide();
        $(".imgItem2").hide();
        $(".imgItem3").hide();
        $(".imgItem4").show();
        $(".btnItem1").removeClass("active");
        $(".btnItem2").removeClass("active");
        $(".btnItem3").removeClass("active");
        $(".btnItem4").addClass("active");
    });
    $(".group1").click(function () {
        $(".groupBox1").show();
        $(".groupBox2").hide();
        $(".groupBox3").hide();
        $(".group1").addClass("active");
        $(".group2").removeClass("active");
        $(".group3").removeClass("active");
        $(".groupNext1").hide();
        $(".groupNext2").hide();
        $(".groupNext3").hide();
        $(".groupPrev1").show();
        $(".groupPrev2").hide();
        $(".groupPrev3").hide();
    });
    $(".group2").click(function () {
        $(".groupBox1").hide();
        $(".groupBox2").show();
        $(".groupBox3").hide();
        $(".group1").removeClass("active");
        $(".group2").addClass("active");
        $(".group3").removeClass("active");
        $(".groupNext1").hide();
        $(".groupNext2").show();
        $(".groupNext3").hide();
        $(".groupPrev1").hide();
        $(".groupPrev2").show();
        $(".groupPrev3").hide();
    });
    $(".group3").click(function () {
        $(".groupBox1").hide();
        $(".groupBox2").hide();
        $(".groupBox3").show();
        $(".group1").removeClass("active");
        $(".group2").removeClass("active");
        $(".group3").addClass("active");
        $(".groupNext1").hide();
        $(".groupNext2").hide();
        $(".groupNext3").show();
        $(".groupPrev1").hide();
        $(".groupPrev2").hide();
        $(".groupPrev3").hide();
    });

    $(".groupPrev1").click(function () {
        $(".groupBox1").hide();
        $(".groupBox2").show();
        $(".groupBox3").hide();
        $(".group1").removeClass("active");
        $(".group2").addClass("active");
        $(".group3").removeClass("active");
        $(".groupNext1").hide();
        $(".groupNext2").show();
        $(".groupNext3").hide();
        $(".groupPrev1").hide();
        $(".groupPrev2").show();
        $(".groupPrev3").hide();
    });
    $(".groupNext2").click(function () {
        $(".groupBox1").show();
        $(".groupBox2").hide();
        $(".groupBox3").hide();
        $(".group1").addClass("active");
        $(".group2").removeClass("active");
        $(".group3").removeClass("active");
        $(".groupNext1").hide();
        $(".groupNext2").hide();
        $(".groupNext3").hide();
        $(".groupPrev1").show();
        $(".groupPrev2").hide();
        $(".groupPrev3").hide();
    });
    $(".groupPrev2").click(function () {
        $(".groupBox1").hide();
        $(".groupBox2").hide();
        $(".groupBox3").show();
        $(".group1").removeClass("active");
        $(".group2").removeClass("active");
        $(".group3").addClass("active");
        $(".groupNext1").hide();
        $(".groupNext2").hide();
        $(".groupNext3").show();
        $(".groupPrev1").hide();
        $(".groupPrev2").hide();
        $(".groupPrev3").hide();
    });
    $(".groupNext3").click(function () {
        $(".groupBox1").hide();
        $(".groupBox2").show();
        $(".groupBox3").hide();
        $(".group1").removeClass("active");
        $(".group2").addClass("active");
        $(".group3").removeClass("active");
        $(".groupNext1").hide();
        $(".groupNext2").show();
        $(".groupNext3").hide();
        $(".groupPrev1").hide();
        $(".groupPrev2").show();
        $(".groupPrev3").hide();
    });
});