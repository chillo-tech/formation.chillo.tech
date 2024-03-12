const CodeView = () => {
  return (
    <div className="w-[90%] mx-auto md:w-1/2 shrink-0 px-2 max-w-[700px]">
      <div className="bg-gradient-to-r from-blue-700 via-indigo-800 to-blue-900 rounded-lg select-none relative">
        <div className="flex flex-row">
          <div className="h-[3px] bg-gradient-to-r from-transparent via-green-400 to-blue-500 w-full"></div>
          <div className="h-[3px] bg-gradient-to-r from-blue-600 via-red-400 to-transparent w-full"></div>
        </div>
        <div className="px-8 py-5 border-b-2 border-b-white">
          <div className="flex flex-row space-x-2">
            <div className="rounded-full bg-red-400 w-3 h-3"></div>
            <div className="rounded-full bg-orange-400 w-3 h-3"></div>
            <div className="rounded-full bg-green-200 w-3 h-3"></div>
          </div>
        </div>
        <div className="px-8 py-8 border-t-[2px] border-indigo-900 overflow-hidden">
          <code className="font-mono">
            <div className="blink">
              <span className="text-pink-500 mr-2">const</span>
              <span className="text-white mr-2">devops</span>
              <span className="text-pink-500 mr-2">=</span>
              <span className="text-gray-400">{"{"}</span>
            </div>
            <div>
              <span className="text-white ml-8 mr-2">name:</span>
              <span className="text-gray-400">'</span>
              <span className="text-amber-300">Become DEVOPS</span>
              <span className="text-gray-400">',</span>
            </div>
            <div>
              <span className="text-white ml-8 mr-2">skills:</span>
              <span className="text-gray-400">['</span>
              <span className="text-amber-300">build</span>
              <span className="text-gray-400">', '</span>
              <span className="text-amber-300">deploy</span>
              <span className="text-gray-400">'],</span>
            </div>
            <div>
              <span className="text-white ml-8 mr-2">hardWorker:</span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">,</span>
            </div>
            <div>
              <span className="text-white ml-8 mr-2">problemSolver:</span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">,</span>
            </div>
            <div>
              <span className="text-green-400 ml-8 mr-2">hireable:</span>
              <span className="text-orange-400">function</span>
              <span className="text-gray-400">() {"{"}</span>
            </div>
            <div>
              <span className="text-orange-400 ml-16 mr-2">return</span>
              <span className="text-gray-400">(</span>
            </div>
            <div>
              <span className="text-blue-300 ml-24">this.</span>
              <span className="text-white mr-2">hardWorker</span>
              <span className="text-amber-300">&amp;&amp;</span>
            </div>
            <div>
              <span className="text-blue-300 ml-24">this.</span>
              <span className="text-white mr-2">problemSolver</span>
              <span className="text-amber-300">&amp;&amp;</span>
            </div>
            <div>
              <span className="text-blue-300 ml-24">this.</span>
              <span className="text-white mr-2">skills.length</span>
              <span className="text-amber-300 mr-2">&gt;=</span>
              <span className="text-orange-400">5</span>
            </div>
            <div>
              <span className="text-gray-400 ml-16 mr-2">);</span>
            </div>
            <div>
              <span className="text-gray-400 ml-8">{"}"}</span>
            </div>
            <div>
              <span className="text-gray-400">{"}"}</span>
            </div>
          </code>
        </div>
      </div>
    </div>
  );
};

export { CodeView };
