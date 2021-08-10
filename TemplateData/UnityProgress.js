function UnityProgress(gameInstance, progress)
{
      if (!gameInstance.Module)
            return;


      // progress bar animate
      if (!gameInstance.progress)
      {
            gameInstance.progress = document.createElement("div");
            gameInstance.progress.style.display = "none";
            gameInstance.container.appendChild(gameInstance.progress);

      }



      _progress_towards(progress);




      if (progress == 1)
      {
            gameInstance.progress.style.display = "none";
      }


}