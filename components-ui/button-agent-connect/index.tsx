import React from 'react';
import usePathFromRouter from 'hooks/use-path-from-router';

const ButtonAgentConnect: React.FC<{ usePathFrom?: boolean }> = ({
  usePathFrom,
}) => {
  const pathFrom = usePathFromRouter();
  return (
    <div>
      <form action="/api/auth/agent-connect/login" method="get">
        {usePathFrom && pathFrom && (
          <input readOnly hidden aria-hidden name="pathFrom" value={pathFrom} />
        )}
        <button className="agentconnect-button"></button>
      </form>
      <a
        href="https://agentconnect.gouv.fr/"
        target="_blank"
        rel="noopener noreferrer"
        title="Qu’est-ce que AgentConnect ? - nouvelle fenêtre"
      >
        Qu’est-ce que AgentConnect ?
      </a>
      <style jsx>{`
        .agentconnect-button {
          background-color: transparent !important;
          background-image: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 206 60'%3E%3Cpath fill='%23000091' d='M0 0h206v60H0z'/%3E%3Cpath d='M66 25.5a4.7 4.7 0 0 0 5.2 1.6 3 3 0 0 0 1.8-1.7l.2-1.2c0-1-.2-1.6-.8-2.1l-1.8-1.2-1.8-1c-.6-.4-.9-.8-.9-1.4 0-.5.2-.9.5-1.2.3-.3.7-.5 1.3-.5.5 0 .9.2 1.3.4l1.1 1 1.1-.9c-.4-.5-.9-1-1.5-1.3a4.1 4.1 0 0 0-3.4-.3l-1 .7a2.9 2.9 0 0 0-.9 2c0 1 .3 1.7.8 2.1.6.5 1.2 1 1.8 1.3l1.9 1c.5.3.8.8.8 1.4 0 .5-.2 1-.5 1.2-.3.4-.8.6-1.4.6a3 3 0 0 1-1.5-.4c-.5-.3-.9-.6-1.3-1.1l-1 1ZM76 20l1.6-4.2H76l-1.3 4.3h1.2ZM80.3 16.8c.3 0 .5 0 .7-.2.2-.2.3-.4.3-.7a1 1 0 0 0-.3-.7 1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.2.4-.2.7 0 .3 0 .5.2.7.2.2.5.2.7.2ZM79.6 27H81v-8h-1.4v8ZM83 23c0 .6.1 1.1.3 1.6a4.1 4.1 0 0 0 2.2 2.4c.5.2 1 .3 1.7.3a3.8 3.8 0 0 0 2.9-1.2v.9h1.3V15H90v4.8a4 4 0 0 0-2.8-1.2c-.7 0-1.2.1-1.7.4-.6.2-1 .5-1.4 1l-.8 1.3c-.2.5-.3 1-.3 1.7Zm1.5 0a3.4 3.4 0 0 1 .7-2.2l1-.7 1.1-.2a3.2 3.2 0 0 1 2.7 1.5v3.1c-.3.5-.7.9-1.1 1.2a3.2 3.2 0 0 1-2.7.1l-1-.7c-.2-.2-.4-.5-.5-1-.2-.3-.2-.7-.2-1.1ZM101.3 25.7l-1-.8a2.9 2.9 0 0 1-2.4 1.2 3 3 0 0 1-2.3-.9 3 3 0 0 1-.8-2.2h6.2V22c0-.5 0-1-.2-1.4-.1-.4-.4-.8-.7-1-.3-.4-.7-.6-1.1-.8a4 4 0 0 0-1.5-.3c-.7 0-1.2.1-1.7.4a3.8 3.8 0 0 0-2.1 2.3 5 5 0 0 0 0 3.3c.2.6.5 1 .9 1.4.4.4.8.7 1.4 1 .5.2 1.1.3 1.8.3a4.3 4.3 0 0 0 3.5-1.6Zm-3.8-6c.6 0 1.2.3 1.6.7.4.4.6 1 .6 1.5H95c.2-.7.5-1.2 1-1.6.4-.3 1-.5 1.6-.5ZM103.2 27h1.4v-5.6c.3-.4.6-.8 1-1 .3-.3.8-.5 1.4-.5a2 2 0 0 1 1.5.6c.4.4.6 1 .6 1.7V27h1.3v-4.9c0-1.1-.3-2-.9-2.6a3 3 0 0 0-2.2-.9c-.6 0-1.1.1-1.6.4a4 4 0 0 0-1.1.8V19h-1.4V27ZM113.5 24.3c0 1 .2 1.7.7 2.2.5.4 1.2.7 2 .7h.8l.7-.3v-1.2l-.5.2h-.7c-.5 0-1-.1-1.2-.3-.3-.2-.4-.7-.4-1.3v-4.1h2.8v-1.3h-2.8v-2h-1.4v2H112v1.3h1.5v4.1ZM120.3 16.8c.2 0 .4 0 .6-.2.2-.2.3-.4.3-.7a1 1 0 0 0-.3-.7 1 1 0 0 0-.6-.3 1 1 0 0 0-.7.3c-.2.2-.3.4-.3.7 0 .3 0 .5.3.7.2.2.4.2.7.2Zm-.7 10.2h1.3v-8h-1.3v8ZM122.6 19v1.2h1.5V27h1.4v-6.8h2.8v-1.3h-2.8v-1c0-.5.1-1 .4-1.2.3-.3.6-.5 1-.5l.8.2c.2 0 .4.2.5.4l.9-1-1-.6-1.1-.2c-.9 0-1.6.3-2.1.8-.5.6-.8 1.3-.8 2.1v1h-1.5ZM130.5 16.8c.2 0 .4 0 .6-.2.2-.2.3-.4.3-.7a1 1 0 0 0-.3-.7 1 1 0 0 0-.6-.3 1 1 0 0 0-.7.3c-.2.2-.3.4-.3.7 0 .3 0 .5.3.7.2.2.4.2.7.2Zm-.7 10.2h1.3v-8h-1.3v8ZM141 25.7l-1-.8a2.9 2.9 0 0 1-2.4 1.2 3 3 0 0 1-2.2-.9 3 3 0 0 1-.8-2.2h6.2V22c0-.5 0-1-.2-1.4-.2-.4-.4-.8-.7-1-.4-.4-.7-.6-1.2-.8a4 4 0 0 0-1.5-.3c-.6 0-1.2.1-1.7.4a3.8 3.8 0 0 0-2 2.3 5 5 0 0 0 0 3.3c.2.6.5 1 .8 1.4l1.4 1c.6.2 1.2.3 1.9.3a4.3 4.3 0 0 0 3.4-1.6Zm-3.8-6c.7 0 1.2.3 1.6.7.4.4.6 1 .7 1.5h-4.8c.1-.7.5-1.2.9-1.6.4-.3 1-.5 1.6-.5ZM143 27h1.4v-5.5c.2-.4.5-.7.9-1 .3-.2.8-.3 1.3-.3h.8V19h-.3l-.4-.1c-.5 0-1 0-1.3.3-.4.2-.8.5-1 .8v-1H143V27ZM155.6 27.3c.5 0 1 0 1.5-.3a3 3 0 0 0 1.2-1v1h1.3v-5.4c0-.9-.3-1.6-.8-2.2-.6-.5-1.4-.8-2.4-.8-.8 0-1.4.2-2 .4-.5.3-1 .7-1.3 1.2l1 .8c.3-.4.6-.7 1-.9.3-.2.7-.3 1.2-.3.6 0 1 .2 1.4.5.4.3.6.7.6 1.3v.6l-2.7.4c-1 .1-1.6.4-2 .8-.5.5-.7 1-.7 1.6 0 .7.2 1.3.7 1.7.5.4 1.2.6 2 .6Zm-1.3-2.3c0-.4 0-.7.3-1 .3-.2.7-.3 1.3-.4l2.4-.4v1.5c-.3.5-.7.8-1.1 1-.4.4-.9.5-1.4.5-.5 0-.9-.1-1.1-.4a1 1 0 0 1-.4-.8ZM161 19l3 8h1.9l3.1-8h-1.5l-2.5 6.6-2.6-6.7h-1.5ZM177.6 25.7l-1-.8a2.9 2.9 0 0 1-2.4 1.2 3 3 0 0 1-2.2-.9 3 3 0 0 1-.9-2.2h6.2V22c0-.5 0-1-.2-1.4-.1-.4-.4-.8-.7-1-.3-.4-.7-.6-1.1-.8a4 4 0 0 0-1.5-.3c-.6 0-1.2.1-1.7.4a3.8 3.8 0 0 0-2.1 2.3 5 5 0 0 0 0 3.3c.2.6.5 1 .9 1.4.4.4.8.7 1.4 1 .5.2 1.1.3 1.8.3a4.3 4.3 0 0 0 3.5-1.6Zm-3.8-6c.6 0 1.2.3 1.6.7.4.4.6 1 .6 1.5h-4.8c.2-.7.5-1.2 1-1.6.4-.3 1-.5 1.6-.5ZM183.2 26c-.4 0-.8 0-1.2-.2a2.8 2.8 0 0 1-1.5-1.6l-.3-1.2.3-1.2c.1-.4.3-.7.6-1a2.8 2.8 0 0 1 2.1-.9c.5 0 1 .1 1.3.3l1 .9 1-.8c-.3-.5-.8-1-1.3-1.2-.6-.3-1.3-.5-2-.5s-1.3.1-1.8.4c-.6.2-1 .5-1.4 1-.4.3-.7.8-.9 1.3-.2.5-.3 1-.3 1.7 0 .6.1 1.1.3 1.6.2.6.5 1 .9 1.4.4.4.8.7 1.4 1 .5.2 1.1.3 1.8.3a4.1 4.1 0 0 0 3.4-1.6l-1-.9a2.7 2.7 0 0 1-2.3 1.2ZM65.3 45h2.5l1.2-3h4.7l1.2 3h2.5L73 33.1h-3.1L65.3 45Zm4.4-5.2 1.6-4.4 1.7 4.4h-3.3ZM78.3 46.5c0 .9.4 1.6 1.2 2a6 6 0 0 0 3.1.8c1.4 0 2.5-.4 3.3-1a3 3 0 0 0 1.2-2.4c0-.8-.3-1.5-.8-2-.6-.5-1.4-.8-2.5-.8h-2.6l-.1-.5v-.3l.3-.2h.8c.5 0 1 0 1.5-.2.4-.1.7-.4 1-.6l.7-1a3.1 3.1 0 0 0 .1-2H87v-1.9h-3l-1-.2-.8-.1c-.6 0-1 0-1.5.2-.4.2-.8.4-1 .7-.4.2-.6.6-.7 1-.2.3-.3.7-.3 1.1 0 .5.1 1 .3 1.3.2.4.5.8.9 1l-.7.8a1.8 1.8 0 0 0-.1 1.6c0 .2.2.5.4.6a3 3 0 0 0-.9 1c-.2.3-.3.7-.3 1.1Zm4-6c-.6 0-1-.1-1.2-.4-.3-.2-.4-.6-.4-1s.1-.7.4-1c.3-.3.6-.4 1.1-.4.4 0 .8.1 1 .4.3.3.5.6.5 1s-.2.8-.4 1c-.3.3-.7.4-1 .4Zm-2 5.7.2-.7.6-.5h2.5c.5 0 .8.1 1 .3.3.2.4.5.4.8 0 .4-.2.8-.6 1-.4.3-1 .4-1.8.4-.7 0-1.3-.1-1.7-.3-.4-.3-.6-.6-.6-1ZM96.3 43.6l-1.6-1.2a2.6 2.6 0 0 1-2.1 1c-.8 0-1.4-.2-1.8-.6-.5-.4-.8-1-.8-1.6h6v-.6l.1-.7c0-1-.4-2-1-2.7a4 4 0 0 0-3-1.1c-.6 0-1.3.1-1.8.4a4 4 0 0 0-2.2 2.4l-.3 1.8c0 .6 0 1.2.3 1.8.2.6.5 1 .9 1.5.4.4.9.7 1.5 1 .6.2 1.3.3 2 .3a5 5 0 0 0 2.2-.4c.6-.3 1.2-.8 1.6-1.3ZM92.2 38c.5 0 1 .2 1.3.5.3.3.5.7.5 1.1H90c.1-.5.4-1 .8-1.2a2 2 0 0 1 1.3-.4ZM98.4 45h2.2v-5.6c.1-.3.3-.5.7-.8.3-.3.7-.5 1.2-.5.6 0 1 .2 1.3.5.3.4.4.8.4 1.4v5h2.2v-5.1a5 5 0 0 0-.3-1.7c-.1-.4-.4-.8-.7-1.2a3.2 3.2 0 0 0-2.3-1c-.6 0-1 .2-1.5.4-.4.2-.8.4-1 .7v-.7h-2.2V45ZM109.6 41.9c0 1 .2 1.8.8 2.4.5.6 1.3.9 2.3.9a5 5 0 0 0 1.7-.3V43l-.5.1-.8.1c-.4 0-.7-.1-1-.3-.2-.2-.3-.6-.3-1v-3.5h2.6v-2h-2.6v-2.1h-2.2v2.1H108v2h1.6v3.5ZM122 43a3.9 3.9 0 0 1-2.7-1l-.8-1.4c-.2-.4-.2-1-.2-1.6 0-.5 0-1 .2-1.5a3.7 3.7 0 0 1 2-2.2 3.9 3.9 0 0 1 3.4.2c.5.3 1 .7 1.3 1.2l2-1.5a6.2 6.2 0 0 0-5.1-2.4 6.3 6.3 0 0 0-4.6 1.8 6.4 6.4 0 0 0-1.3 6.9 6 6 0 0 0 3.3 3.3c.8.4 1.7.5 2.6.5 1 0 2-.2 2.9-.6a6 6 0 0 0 2.1-1.8l-1.9-1.5a4 4 0 0 1-1.3 1.2c-.5.3-1.1.5-1.8.5ZM133 36a5 5 0 0 0-3.4 1.5l-1 1.4-.3 1.8c0 .7.1 1.3.3 1.8a4.2 4.2 0 0 0 2.5 2.5 5 5 0 0 0 1.9.3 5 5 0 0 0 1.9-.3 4.5 4.5 0 0 0 2.8-4.3 4.6 4.6 0 0 0-4.7-4.6Zm0 7.3c-.7 0-1.3-.2-1.8-.7-.4-.5-.6-1.1-.6-1.9 0-.7.2-1.3.6-1.8.5-.5 1.1-.8 1.8-.8s1.3.3 1.8.8c.4.5.6 1 .6 1.8s-.2 1.4-.6 1.9c-.5.5-1 .7-1.8.7ZM139.8 45h2.2v-5.6c.1-.3.4-.5.7-.8.3-.3.7-.5 1.3-.5.5 0 .9.2 1.2.5.3.4.5.8.5 1.4v5h2.2v-5.1a5 5 0 0 0-.3-1.7l-.7-1.2a3.2 3.2 0 0 0-2.4-1c-.6 0-1 .2-1.5.4l-1 .7v-.7h-2.2V45ZM150.5 45h2.1v-5.6l.7-.8c.3-.3.8-.5 1.3-.5s1 .2 1.2.5c.4.4.5.8.5 1.4v5h2.2v-5.1a5 5 0 0 0-.3-1.7c-.1-.4-.4-.8-.7-1.2a3.2 3.2 0 0 0-2.3-1 4.4 4.4 0 0 0-2.5 1v-.6h-2.2V45ZM169 43.6l-1.5-1.2a2.6 2.6 0 0 1-2.2 1c-.7 0-1.3-.2-1.8-.6-.5-.4-.7-1-.8-1.6h6l.1-.6V40c0-1-.3-2-1-2.7a4 4 0 0 0-2.9-1.1c-.7 0-1.3.1-1.9.4a4 4 0 0 0-2.2 2.4l-.3 1.8.3 1.8c.2.6.5 1 1 1.5.3.4.8.7 1.4 1 .6.2 1.3.3 2 .3a5 5 0 0 0 2.2-.4c.7-.3 1.2-.8 1.6-1.3Zm-4-5.7c.5 0 1 .2 1.2.5.3.3.5.7.5 1.1H163c0-.5.3-1 .7-1.2a2 2 0 0 1 1.3-.4ZM175.2 43.3c-.7 0-1.3-.2-1.8-.7-.5-.5-.7-1.1-.7-1.9 0-.7.2-1.3.7-1.8.5-.5 1-.8 1.8-.8.4 0 .8.1 1 .3.4.2.7.4.9.7l1.7-1.3a4.6 4.6 0 0 0-3.6-1.7c-.8 0-1.4.1-2 .4-.6.2-1 .6-1.5 1l-1 1.4-.2 1.8a4.8 4.8 0 0 0 1.2 3.3 4.9 4.9 0 0 0 3.5 1.4 4.4 4.4 0 0 0 3.6-1.8l-1.7-1.3-.8.7c-.3.2-.7.3-1.1.3ZM181.2 41.9c0 1 .3 1.8.8 2.4.5.6 1.3.9 2.4.9a5 5 0 0 0 1.6-.3V43l-.5.1-.7.1c-.5 0-.8-.1-1-.3-.3-.2-.4-.6-.4-1v-3.5h2.6v-2h-2.6v-2.1h-2.2v2.1h-1.6v2h1.6v3.5ZM33.4 6.1a1 1 0 0 0-.8 0L12.4 17.7a1 1 0 0 0-.4.7v23.2c0 .2.2.6.4.7l20.2 11.6c.2.1.6.1.8 0l20.2-11.6c.2-.1.4-.5.4-.7V18.4a1 1 0 0 0-.4-.7L33.4 6.1Z' fill='%23fff'/%3E%3Cpath d='m33 48.7-15.8-9c-.2-.1-.3-.4-.3-.6V21.3c0-.3.1-.5.3-.6L33 11.5' fill='%23508FFF'/%3E%3Cpath d='m17 39-.1-17.8c0-.3.1-.5.3-.6l15.8-9' fill='%23000091'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M27.4 21.1 22 30.2l-4.8-9.6 5.6-3.3 4.8 3.3-.3.5Z' fill='%23E1000F'/%3E%3Cpath d='m33 48.7 15.7-9.1c.2-.1.3-.4.3-.6V21.2c0-.2-.1-.5-.3-.6l-15.7-9' fill='%23000091'/%3E%3Cpath d='M49 39V21.2c0-.2-.1-.5-.3-.6l-15.7-9' fill='%23E1000F'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m38.2 20.4 5.6 9.8 4.7-9.7-5.7-3.3-4.6 3.2Z' fill='%23508FFF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m39 20 .9.9c0 .1.2.4.1.6 0 .3-.1.7-.4.8H38c.7.3 1.4.6 2 1.3l.4.2v.2s-.2.1-.1.2h.1c.3 0 .3-.6.6-.4.2.2.3.5.2.7l-.6.5v.4c.2.2.2.4.2.6l.4 1.1c.2.8.4 1.5.3 2.3 0 .4-.2.7 0 1.1 0 .4.3.7.5 1l.6.9.2.3v.1c.3.4.6.7.4 1.2-.2.3-.7.2-1 .5-.4.2-.1.6 0 .9.3.4-.3.7-.6.9 0 .1.3 0 .3.2s.3.4.2.6l-.3.3c-.2.2-.4.4-.2.6.2.4 0 .8 0 1.2-.2.4-.6.6-1 .7a2 2 0 0 1-1 0h-.2c-.9-.2-1.7-.4-2.6-.4l-.6.2c-.3.1-.5.3-.6.5l-.2.1v.1l-.5.7a4 4 0 0 0-.4 1c-.3 1.1-.2 2.1 0 2.4l3.8 1.3c-3 2.4-5.3 3.6-7.1 3.6-2.5 0-6.7-1.6-12.5-5 1.4 0 1.2.6 2.5 0 .6-.3 2-1 2.5-1.4l.9-1c.5-.5 1-1.1 1.7-1.6l.5-.5.1-.2-.6.4s-.1 0 0 0c0-.2.3-.3.4-.5-.7-.2-1.2.3-1.6.7h-.3c-.7.2-1.3.8-2 1.1v-.1l-.9.3h-1.2l-1.9.4a4 4 0 0 0-1 .4v.1l-.4.3-.8.7c-.4.3 0-.5.3-.7h-.1v-.2h.1v-.1l-.3.1.1-.5.6-.4c-.3 0-.5.2-.8.4l.1-.3h.1c1-.7 2.1-.9 3.3-1l.3-.1 2-.4.5-.3.8-.5c.4-.3.7-.7.8-1.2a8 8 0 0 1-2.2 1.6c-1 .5-2.2.4-3.3.6l.2-.1c0-.2.1-.2.2-.3h.2V40h.3c-.2-.3-.5 0-.7 0 .1-.2 0-.3.2-.4h.2v-.2l2.2-1.2c-.1 0-.2.2-.4 0h.1l1.6-.7h-.6l.3-.2v-.2h.1c0-.2.1-.1.2-.2H23c.1-.3.3-.3.6-.4h-.2v-.1c-.1 0 0-.2 0-.2l.4-1.2h-.1c-.5.5-1.3.7-2 .9h-.4a1 1 0 0 1-.8 0l-.5-.5-1.3-.6c-1.2-.4-2.5-.6-3.8-.5.5-.3 1.2-.4 1.7-.5.9-.3 1.7-.6 2.6-.5h-.5c-.7-.1-1.4.1-2.2.2L15 34c-.3.1-.5.4-.8.4V34c.5-.6 1.1-1.2 1.9-1.2.9-.2 1.7 0 2.6 0l2 .4c.2 0 .2.4.4.5.3 0 .6 0 1 .2v-.3c.1-.2.4 0 .6 0 .4-.3-.4-.7-.6-1.1v-.1l1.3 1c.2.1.8.2.7 0-.2-.6-.7-1-1.1-1.6v-.2h-.2v-.3c-.2-.1-.2-.3-.2-.4-.2-.3 0-.7-.2-1a5 5 0 0 1-.2-.8l-.5-2.4c0-1 .6-1.7 1-2.5a4 4 0 0 1 1.4-1.6c.2-.6.6-1.1 1-1.6s1-.8 1.5-1l1.3-.5c.5-.2 7-1.6 10 0l.3.1.7.4ZM14.7 34.7c0 .2-.2.4-.4.5.4 0 .7 0 1.1.3h-.2c.3.2.6 0 .8.3-.1.1-.3 0-.4 0 1.5.4 3.1.7 4.4 1.7-1.1.6-2.2.8-3.4 1h-.4v.1c-.2 0-.4 0-.5.2-.2.1-.5.2-.7 0l.3-.1H15v-.1l-.9.2c-.3.1-.2-1.6 0-1.7V37c-.3 0-.4-.6-.2-.6s.4 0 .6-.2c-.4 0-.5-1.3.1-1.6h.2Zm2.2 4.6c-.3.3-.7.1-1 .3h-.3c0-.2.2-.3.4-.4h.2l.4-.2c0 .2.2.1.3.3Zm-1.8-6.8h-.1v-.2c-.5.5-1.6.3-.6-.2h1.3c-.1.3-.4.2-.6.4ZM39.6 29h-.2l-.7.2-1 .5c.3-.2.7-.2 1.1-.3h.9l.5.1c-.1.4-.7.5-1 .9H39c-.2.1-.1.3-.3.3h-.4c.2.3.4.4.7.4 0 0 .2 0 .2.2h.2v.2l-.3.1H38.8 40c.3 0 0-.6.2-.8l-.1-.1.3-.3s.2 0 .3-.2l-.2-.2c.3-.2.6-.5.5-.8 0-.2-.5-.2-.7-.3h-.7Z' fill='%23fff'/%3E%3C/svg%3E");
          background-position: 50% 50%;
          background-repeat: no-repeat;
          width: 206px;
          height: 60px;
          border: none;
        }

        .agentconnect-button:hover {
          background-image: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 206 60'%3E%3Cpath fill='%231212ff' stroke='%231212ff' stroke-width='2' d='M1 1h204v58H1z'/%3E%3Cpath d='M66 25.5a4.7 4.7 0 0 0 5.2 1.6 3 3 0 0 0 1.8-1.7l.2-1.2c0-1-.2-1.6-.8-2.1l-1.8-1.2-1.8-1c-.6-.4-.9-.8-.9-1.4 0-.5.2-.9.5-1.2.3-.3.7-.5 1.3-.5.5 0 .9.2 1.3.4l1.1 1 1.1-.9c-.4-.5-.9-1-1.5-1.3a4.1 4.1 0 0 0-3.4-.3l-1 .7a2.9 2.9 0 0 0-.9 2c0 1 .3 1.7.8 2.1.6.5 1.2 1 1.8 1.3l1.9 1c.5.3.8.8.8 1.4 0 .5-.2 1-.5 1.2-.3.4-.8.6-1.4.6a3 3 0 0 1-1.5-.4c-.5-.3-.9-.6-1.3-1.1l-1 1ZM76 20l1.6-4.2H76l-1.3 4.3h1.2ZM80.3 16.8c.3 0 .5 0 .7-.2.2-.2.3-.4.3-.7a1 1 0 0 0-.3-.7 1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.2.4-.2.7 0 .3 0 .5.2.7.2.2.5.2.7.2ZM79.6 27H81v-8h-1.4v8ZM83 23c0 .6.1 1.1.3 1.6a4.1 4.1 0 0 0 2.2 2.4c.5.2 1 .3 1.7.3a3.8 3.8 0 0 0 2.9-1.2v.9h1.3V15H90v4.8a4 4 0 0 0-2.8-1.2c-.7 0-1.2.1-1.7.4-.6.2-1 .5-1.4 1l-.8 1.3c-.2.5-.3 1-.3 1.7Zm1.5 0a3.4 3.4 0 0 1 .7-2.2l1-.7 1.1-.2a3.2 3.2 0 0 1 2.7 1.5v3.1c-.3.5-.7.9-1.1 1.2a3.2 3.2 0 0 1-2.7.1l-1-.7c-.2-.2-.4-.5-.5-1-.2-.3-.2-.7-.2-1.1ZM101.3 25.7l-1-.8a2.9 2.9 0 0 1-2.4 1.2 3 3 0 0 1-2.3-.9 3 3 0 0 1-.8-2.2h6.2V22c0-.5 0-1-.2-1.4-.1-.4-.4-.8-.7-1-.3-.4-.7-.6-1.1-.8a4 4 0 0 0-1.5-.3c-.7 0-1.2.1-1.7.4a3.8 3.8 0 0 0-2.1 2.3 5 5 0 0 0 0 3.3c.2.6.5 1 .9 1.4.4.4.8.7 1.4 1 .5.2 1.1.3 1.8.3a4.3 4.3 0 0 0 3.5-1.6Zm-3.8-6c.6 0 1.2.3 1.6.7.4.4.6 1 .6 1.5H95c.2-.7.5-1.2 1-1.6.4-.3 1-.5 1.6-.5ZM103.2 27h1.4v-5.6c.3-.4.6-.8 1-1 .3-.3.8-.5 1.4-.5a2 2 0 0 1 1.5.6c.4.4.6 1 .6 1.7V27h1.3v-4.9c0-1.1-.3-2-.9-2.6a3 3 0 0 0-2.2-.9c-.6 0-1.1.1-1.6.4a4 4 0 0 0-1.1.8V19h-1.4V27ZM113.5 24.3c0 1 .2 1.7.7 2.2.5.4 1.2.7 2 .7h.8l.7-.3v-1.2l-.5.2h-.7c-.5 0-1-.1-1.2-.3-.3-.2-.4-.7-.4-1.3v-4.1h2.8v-1.3h-2.8v-2h-1.4v2H112v1.3h1.5v4.1ZM120.3 16.8c.2 0 .4 0 .6-.2.2-.2.3-.4.3-.7a1 1 0 0 0-.3-.7 1 1 0 0 0-.6-.3 1 1 0 0 0-.7.3c-.2.2-.3.4-.3.7 0 .3 0 .5.3.7.2.2.4.2.7.2Zm-.7 10.2h1.3v-8h-1.3v8ZM122.6 19v1.2h1.5V27h1.4v-6.8h2.8v-1.3h-2.8v-1c0-.5.1-1 .4-1.2.3-.3.6-.5 1-.5l.8.2c.2 0 .4.2.5.4l.9-1-1-.6-1.1-.2c-.9 0-1.6.3-2.1.8-.5.6-.8 1.3-.8 2.1v1h-1.5ZM130.5 16.8c.2 0 .4 0 .6-.2.2-.2.3-.4.3-.7a1 1 0 0 0-.3-.7 1 1 0 0 0-.6-.3 1 1 0 0 0-.7.3c-.2.2-.3.4-.3.7 0 .3 0 .5.3.7.2.2.4.2.7.2Zm-.7 10.2h1.3v-8h-1.3v8ZM141 25.7l-1-.8a2.9 2.9 0 0 1-2.4 1.2 3 3 0 0 1-2.2-.9 3 3 0 0 1-.8-2.2h6.2V22c0-.5 0-1-.2-1.4-.2-.4-.4-.8-.7-1-.4-.4-.7-.6-1.2-.8a4 4 0 0 0-1.5-.3c-.6 0-1.2.1-1.7.4a3.8 3.8 0 0 0-2 2.3 5 5 0 0 0 0 3.3c.2.6.5 1 .8 1.4l1.4 1c.6.2 1.2.3 1.9.3a4.3 4.3 0 0 0 3.4-1.6Zm-3.8-6c.7 0 1.2.3 1.6.7.4.4.6 1 .7 1.5h-4.8c.1-.7.5-1.2.9-1.6.4-.3 1-.5 1.6-.5ZM143 27h1.4v-5.5c.2-.4.5-.7.9-1 .3-.2.8-.3 1.3-.3h.8V19h-.3l-.4-.1c-.5 0-1 0-1.3.3-.4.2-.8.5-1 .8v-1H143V27ZM155.6 27.3c.5 0 1 0 1.5-.3a3 3 0 0 0 1.2-1v1h1.3v-5.4c0-.9-.3-1.6-.8-2.2-.6-.5-1.4-.8-2.4-.8-.8 0-1.4.2-2 .4-.5.3-1 .7-1.3 1.2l1 .8c.3-.4.6-.7 1-.9.3-.2.7-.3 1.2-.3.6 0 1 .2 1.4.5.4.3.6.7.6 1.3v.6l-2.7.4c-1 .1-1.6.4-2 .8-.5.5-.7 1-.7 1.6 0 .7.2 1.3.7 1.7.5.4 1.2.6 2 .6Zm-1.3-2.3c0-.4 0-.7.3-1 .3-.2.7-.3 1.3-.4l2.4-.4v1.5c-.3.5-.7.8-1.1 1-.4.4-.9.5-1.4.5-.5 0-.9-.1-1.1-.4a1 1 0 0 1-.4-.8ZM161 19l3 8h1.9l3.1-8h-1.5l-2.5 6.6-2.6-6.7h-1.5ZM177.6 25.7l-1-.8a2.9 2.9 0 0 1-2.4 1.2 3 3 0 0 1-2.2-.9 3 3 0 0 1-.9-2.2h6.2V22c0-.5 0-1-.2-1.4-.1-.4-.4-.8-.7-1-.3-.4-.7-.6-1.1-.8a4 4 0 0 0-1.5-.3c-.6 0-1.2.1-1.7.4a3.8 3.8 0 0 0-2.1 2.3 5 5 0 0 0 0 3.3c.2.6.5 1 .9 1.4.4.4.8.7 1.4 1 .5.2 1.1.3 1.8.3a4.3 4.3 0 0 0 3.5-1.6Zm-3.8-6c.6 0 1.2.3 1.6.7.4.4.6 1 .6 1.5h-4.8c.2-.7.5-1.2 1-1.6.4-.3 1-.5 1.6-.5ZM183.2 26c-.4 0-.8 0-1.2-.2a2.8 2.8 0 0 1-1.5-1.6l-.3-1.2.3-1.2c.1-.4.3-.7.6-1a2.8 2.8 0 0 1 2.1-.9c.5 0 1 .1 1.3.3l1 .9 1-.8c-.3-.5-.8-1-1.3-1.2-.6-.3-1.3-.5-2-.5s-1.3.1-1.8.4c-.6.2-1 .5-1.4 1-.4.3-.7.8-.9 1.3-.2.5-.3 1-.3 1.7 0 .6.1 1.1.3 1.6.2.6.5 1 .9 1.4.4.4.8.7 1.4 1 .5.2 1.1.3 1.8.3a4.1 4.1 0 0 0 3.4-1.6l-1-.9a2.7 2.7 0 0 1-2.3 1.2ZM65.3 45h2.5l1.2-3h4.7l1.2 3h2.5L73 33.1h-3.1L65.3 45Zm4.4-5.2 1.6-4.4 1.7 4.4h-3.3ZM78.3 46.5c0 .9.4 1.6 1.2 2a6 6 0 0 0 3.1.8c1.4 0 2.5-.4 3.3-1a3 3 0 0 0 1.2-2.4c0-.8-.3-1.5-.8-2-.6-.5-1.4-.8-2.5-.8h-2.6l-.1-.5v-.3l.3-.2h.8c.5 0 1 0 1.5-.2.4-.1.7-.4 1-.6l.7-1a3.1 3.1 0 0 0 .1-2H87v-1.9h-3l-1-.2-.8-.1c-.6 0-1 0-1.5.2-.4.2-.8.4-1 .7-.4.2-.6.6-.7 1-.2.3-.3.7-.3 1.1 0 .5.1 1 .3 1.3.2.4.5.8.9 1l-.7.8a1.8 1.8 0 0 0-.1 1.6c0 .2.2.5.4.6a3 3 0 0 0-.9 1c-.2.3-.3.7-.3 1.1Zm4-6c-.6 0-1-.1-1.2-.4-.3-.2-.4-.6-.4-1s.1-.7.4-1c.3-.3.6-.4 1.1-.4.4 0 .8.1 1 .4.3.3.5.6.5 1s-.2.8-.4 1c-.3.3-.7.4-1 .4Zm-2 5.7.2-.7.6-.5h2.5c.5 0 .8.1 1 .3.3.2.4.5.4.8 0 .4-.2.8-.6 1-.4.3-1 .4-1.8.4-.7 0-1.3-.1-1.7-.3-.4-.3-.6-.6-.6-1ZM96.3 43.6l-1.6-1.2a2.6 2.6 0 0 1-2.1 1c-.8 0-1.4-.2-1.8-.6-.5-.4-.8-1-.8-1.6h6v-.6l.1-.7c0-1-.4-2-1-2.7a4 4 0 0 0-3-1.1c-.6 0-1.3.1-1.8.4a4 4 0 0 0-2.2 2.4l-.3 1.8c0 .6 0 1.2.3 1.8.2.6.5 1 .9 1.5.4.4.9.7 1.5 1 .6.2 1.3.3 2 .3a5 5 0 0 0 2.2-.4c.6-.3 1.2-.8 1.6-1.3ZM92.2 38c.5 0 1 .2 1.3.5.3.3.5.7.5 1.1H90c.1-.5.4-1 .8-1.2a2 2 0 0 1 1.3-.4ZM98.4 45h2.2v-5.6c.1-.3.3-.5.7-.8.3-.3.7-.5 1.2-.5.6 0 1 .2 1.3.5.3.4.4.8.4 1.4v5h2.2v-5.1a5 5 0 0 0-.3-1.7c-.1-.4-.4-.8-.7-1.2a3.2 3.2 0 0 0-2.3-1c-.6 0-1 .2-1.5.4-.4.2-.8.4-1 .7v-.7h-2.2V45ZM109.6 41.9c0 1 .2 1.8.8 2.4.5.6 1.3.9 2.3.9a5 5 0 0 0 1.7-.3V43l-.5.1-.8.1c-.4 0-.7-.1-1-.3-.2-.2-.3-.6-.3-1v-3.5h2.6v-2h-2.6v-2.1h-2.2v2.1H108v2h1.6v3.5ZM122 43a3.9 3.9 0 0 1-2.7-1l-.8-1.4c-.2-.4-.2-1-.2-1.6 0-.5 0-1 .2-1.5a3.7 3.7 0 0 1 2-2.2 3.9 3.9 0 0 1 3.4.2c.5.3 1 .7 1.3 1.2l2-1.5a6.2 6.2 0 0 0-5.1-2.4 6.3 6.3 0 0 0-4.6 1.8 6.4 6.4 0 0 0-1.3 6.9 6 6 0 0 0 3.3 3.3c.8.4 1.7.5 2.6.5 1 0 2-.2 2.9-.6a6 6 0 0 0 2.1-1.8l-1.9-1.5a4 4 0 0 1-1.3 1.2c-.5.3-1.1.5-1.8.5ZM133 36a5 5 0 0 0-3.4 1.5l-1 1.4-.3 1.8c0 .7.1 1.3.3 1.8a4.2 4.2 0 0 0 2.5 2.5 5 5 0 0 0 1.9.3 5 5 0 0 0 1.9-.3 4.5 4.5 0 0 0 2.8-4.3 4.6 4.6 0 0 0-4.7-4.6Zm0 7.3c-.7 0-1.3-.2-1.8-.7-.4-.5-.6-1.1-.6-1.9 0-.7.2-1.3.6-1.8.5-.5 1.1-.8 1.8-.8s1.3.3 1.8.8c.4.5.6 1 .6 1.8s-.2 1.4-.6 1.9c-.5.5-1 .7-1.8.7ZM139.8 45h2.2v-5.6c.1-.3.4-.5.7-.8.3-.3.7-.5 1.3-.5.5 0 .9.2 1.2.5.3.4.5.8.5 1.4v5h2.2v-5.1a5 5 0 0 0-.3-1.7l-.7-1.2a3.2 3.2 0 0 0-2.4-1c-.6 0-1 .2-1.5.4l-1 .7v-.7h-2.2V45ZM150.5 45h2.1v-5.6l.7-.8c.3-.3.8-.5 1.3-.5s1 .2 1.2.5c.4.4.5.8.5 1.4v5h2.2v-5.1a5 5 0 0 0-.3-1.7c-.1-.4-.4-.8-.7-1.2a3.2 3.2 0 0 0-2.3-1 4.4 4.4 0 0 0-2.5 1v-.6h-2.2V45ZM169 43.6l-1.5-1.2a2.6 2.6 0 0 1-2.2 1c-.7 0-1.3-.2-1.8-.6-.5-.4-.7-1-.8-1.6h6l.1-.6V40c0-1-.3-2-1-2.7a4 4 0 0 0-2.9-1.1c-.7 0-1.3.1-1.9.4a4 4 0 0 0-2.2 2.4l-.3 1.8.3 1.8c.2.6.5 1 1 1.5.3.4.8.7 1.4 1 .6.2 1.3.3 2 .3a5 5 0 0 0 2.2-.4c.7-.3 1.2-.8 1.6-1.3Zm-4-5.7c.5 0 1 .2 1.2.5.3.3.5.7.5 1.1H163c0-.5.3-1 .7-1.2a2 2 0 0 1 1.3-.4ZM175.2 43.3c-.7 0-1.3-.2-1.8-.7-.5-.5-.7-1.1-.7-1.9 0-.7.2-1.3.7-1.8.5-.5 1-.8 1.8-.8.4 0 .8.1 1 .3.4.2.7.4.9.7l1.7-1.3a4.6 4.6 0 0 0-3.6-1.7c-.8 0-1.4.1-2 .4-.6.2-1 .6-1.5 1l-1 1.4-.2 1.8a4.8 4.8 0 0 0 1.2 3.3 4.9 4.9 0 0 0 3.5 1.4 4.4 4.4 0 0 0 3.6-1.8l-1.7-1.3-.8.7c-.3.2-.7.3-1.1.3ZM181.2 41.9c0 1 .3 1.8.8 2.4.5.6 1.3.9 2.4.9a5 5 0 0 0 1.6-.3V43l-.5.1-.7.1c-.5 0-.8-.1-1-.3-.3-.2-.4-.6-.4-1v-3.5h2.6v-2h-2.6v-2.1h-2.2v2.1h-1.6v2h1.6v3.5ZM33.4 6.1a1 1 0 0 0-.8 0L12.4 17.7a1 1 0 0 0-.4.7v23.2c0 .2.2.6.4.7l20.2 11.6c.2.1.6.1.8 0l20.2-11.6c.2-.1.4-.5.4-.7V18.4a1 1 0 0 0-.4-.7L33.4 6.1Z' fill='%23fff'/%3E%3Cpath d='m33 48.7-15.8-9c-.2-.1-.3-.4-.3-.6V21.3c0-.3.1-.5.3-.6L33 11.5' fill='%23508FFF'/%3E%3Cpath d='m17 39-.1-17.8c0-.3.1-.5.3-.6l15.8-9' fill='%231212ff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M27.4 21.1 22 30.2l-4.8-9.6 5.6-3.3 4.8 3.3-.3.5Z' fill='%23E1000F'/%3E%3Cpath d='m33 48.7 15.7-9.1c.2-.1.3-.4.3-.6V21.2c0-.2-.1-.5-.3-.6l-15.7-9' fill='%231212ff'/%3E%3Cpath d='M49 39V21.2c0-.2-.1-.5-.3-.6l-15.7-9' fill='%23E1000F'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m38.2 20.4 5.6 9.8 4.7-9.7-5.7-3.3-4.6 3.2Z' fill='%23508FFF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m39 20 .9.9c0 .1.2.4.1.6 0 .3-.1.7-.4.8H38c.7.3 1.4.6 2 1.3l.4.2v.2s-.2.1-.1.2h.1c.3 0 .3-.6.6-.4.2.2.3.5.2.7l-.6.5v.4c.2.2.2.4.2.6l.4 1.1c.2.8.4 1.5.3 2.3 0 .4-.2.7 0 1.1 0 .4.3.7.5 1l.6.9.2.3v.1c.3.4.6.7.4 1.2-.2.3-.7.2-1 .5-.4.2-.1.6 0 .9.3.4-.3.7-.6.9 0 .1.3 0 .3.2s.3.4.2.6l-.3.3c-.2.2-.4.4-.2.6.2.4 0 .8 0 1.2-.2.4-.6.6-1 .7a2 2 0 0 1-1 0h-.2c-.9-.2-1.7-.4-2.6-.4l-.6.2c-.3.1-.5.3-.6.5l-.2.1v.1l-.5.7a4 4 0 0 0-.4 1c-.3 1.1-.2 2.1 0 2.4l3.8 1.3c-3 2.4-5.3 3.6-7.1 3.6-2.5 0-6.7-1.6-12.5-5 1.4 0 1.2.6 2.5 0 .6-.3 2-1 2.5-1.4l.9-1c.5-.5 1-1.1 1.7-1.6l.5-.5.1-.2-.6.4s-.1 0 0 0c0-.2.3-.3.4-.5-.7-.2-1.2.3-1.6.7h-.3c-.7.2-1.3.8-2 1.1v-.1l-.9.3h-1.2l-1.9.4a4 4 0 0 0-1 .4v.1l-.4.3-.8.7c-.4.3 0-.5.3-.7h-.1v-.2h.1v-.1l-.3.1.1-.5.6-.4c-.3 0-.5.2-.8.4l.1-.3h.1c1-.7 2.1-.9 3.3-1l.3-.1 2-.4.5-.3.8-.5c.4-.3.7-.7.8-1.2a8 8 0 0 1-2.2 1.6c-1 .5-2.2.4-3.3.6l.2-.1c0-.2.1-.2.2-.3h.2V40h.3c-.2-.3-.5 0-.7 0 .1-.2 0-.3.2-.4h.2v-.2l2.2-1.2c-.1 0-.2.2-.4 0h.1l1.6-.7h-.6l.3-.2v-.2h.1c0-.2.1-.1.2-.2H23c.1-.3.3-.3.6-.4h-.2v-.1c-.1 0 0-.2 0-.2l.4-1.2h-.1c-.5.5-1.3.7-2 .9h-.4a1 1 0 0 1-.8 0l-.5-.5-1.3-.6c-1.2-.4-2.5-.6-3.8-.5.5-.3 1.2-.4 1.7-.5.9-.3 1.7-.6 2.6-.5h-.5c-.7-.1-1.4.1-2.2.2L15 34c-.3.1-.5.4-.8.4V34c.5-.6 1.1-1.2 1.9-1.2.9-.2 1.7 0 2.6 0l2 .4c.2 0 .2.4.4.5.3 0 .6 0 1 .2v-.3c.1-.2.4 0 .6 0 .4-.3-.4-.7-.6-1.1v-.1l1.3 1c.2.1.8.2.7 0-.2-.6-.7-1-1.1-1.6v-.2h-.2v-.3c-.2-.1-.2-.3-.2-.4-.2-.3 0-.7-.2-1a5 5 0 0 1-.2-.8l-.5-2.4c0-1 .6-1.7 1-2.5a4 4 0 0 1 1.4-1.6c.2-.6.6-1.1 1-1.6s1-.8 1.5-1l1.3-.5c.5-.2 7-1.6 10 0l.3.1.7.4ZM14.7 34.7c0 .2-.2.4-.4.5.4 0 .7 0 1.1.3h-.2c.3.2.6 0 .8.3-.1.1-.3 0-.4 0 1.5.4 3.1.7 4.4 1.7-1.1.6-2.2.8-3.4 1h-.4v.1c-.2 0-.4 0-.5.2-.2.1-.5.2-.7 0l.3-.1H15v-.1l-.9.2c-.3.1-.2-1.6 0-1.7V37c-.3 0-.4-.6-.2-.6s.4 0 .6-.2c-.4 0-.5-1.3.1-1.6h.2Zm2.2 4.6c-.3.3-.7.1-1 .3h-.3c0-.2.2-.3.4-.4h.2l.4-.2c0 .2.2.1.3.3Zm-1.8-6.8h-.1v-.2c-.5.5-1.6.3-.6-.2h1.3c-.1.3-.4.2-.6.4ZM39.6 29h-.2l-.7.2-1 .5c.3-.2.7-.2 1.1-.3h.9l.5.1c-.1.4-.7.5-1 .9H39c-.2.1-.1.3-.3.3h-.4c.2.3.4.4.7.4 0 0 .2 0 .2.2h.2v.2l-.3.1H38.8 40c.3 0 0-.6.2-.8l-.1-.1.3-.3s.2 0 .3-.2l-.2-.2c.3-.2.6-.5.5-.8 0-.2-.5-.2-.7-.3h-.7Z' fill='%23fff'/%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
};

export default ButtonAgentConnect;
