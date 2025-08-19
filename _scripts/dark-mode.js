/*
  管理深色/浅色模式，默认深色模式
*/

{
  // 页面渲染前加载保存的模式（默认深色模式）
  document.documentElement.dataset.dark =
    window.localStorage.getItem("dark-mode") ?? "true"; // 这里将默认值改为 "true"

  const onLoad = () => {
    // 更新切换按钮状态以匹配加载的模式
    document.querySelector(".dark-toggle").checked =
      document.documentElement.dataset.dark === "true";
  };

  // 页面加载后执行
  window.addEventListener("load", onLoad);

  // 当用户切换模式按钮时
  window.onDarkToggleChange = (event) => {
    const value = event.target.checked;
    document.documentElement.dataset.dark = value;
    window.localStorage.setItem("dark-mode", value);
  };
}
