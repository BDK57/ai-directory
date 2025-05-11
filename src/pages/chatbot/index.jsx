import React, { useEffect, useRef, useState } from 'react'
import BackgroundImage from '../../assets/chatbot/bg-chatbot-image.png'
import Group1 from '../../assets/chatbot/tools/Group1.svg'
import Group2 from '../../assets/chatbot/tools/Group2.svg'
import Group3 from '../../assets/chatbot/tools/Group3.svg'
import Group4 from '../../assets/chatbot/tools/Group4.svg'
import Group5 from '../../assets/chatbot/tools/Group5.svg'
import MediateIcon from '../../assets/chatbot/tools/mediateIcon.svg'
import SearchIcon from '../../assets/chatbot/tools/searchIcon.svg'
import SendIcon from '../../assets/chatbot/tools/sendIcon.svg'
import AttachmentIcon from '../../assets/chatbot/tools/attachmentIcon.svg'
import ToolsSlider from '../../assets/chatbot/AIComparisonTool.png'
import Grid2 from '../../assets/chatbot/grid2.svg'
import Grid4 from '../../assets/chatbot/grid4.svg'
import Grid6 from '../../assets/chatbot/grid6.svg'
import { Textarea } from '@heroui/input'
import { Button } from '@heroui/button'
import axios from 'axios'

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! How can I assist you today?", sender: "bot" }
      ]);
      const [input, setInput] = useState("");
      const [isTyping, setIsTyping] = useState(false);
      const [file, setFile] = useState(null);
      const [filePreview, setFilePreview] = useState(null);
      const [abortController, setAbortController] = useState(null);
      const fileInputRef = useRef(null);
      const messagesEndRef = useRef(null);
    
      // Auto-scroll to bottom
      useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, [messages]);
    
      // Type response character by character
      const typeResponse = (fullText) => {
        let i = 0;
        const botResponse = { text: "", sender: "bot", id: Date.now() };
        setMessages(prev => [...prev, botResponse]);
        
        const typingInterval = setInterval(() => {
          if (i < fullText.length) {
            botResponse.text = fullText.substring(0, i + 1);
            setMessages(prev => [...prev.slice(0, -1), {...botResponse}]);
            i++;
          } else {
            clearInterval(typingInterval);
            setIsTyping(false);
            setAbortController(null);
          }
        }, 20);
    
        return typingInterval;
      };
    
      // Stop generation
      const stopGeneration = () => {
        if (abortController) {
          abortController.abort();
          setIsTyping(false);
          setAbortController(null);
        }
      };
    
      // Call ChatGPT API directly
      const callChatGPT = async (prompt) => {
        const controller = new AbortController();
        setAbortController(controller);
        setIsTyping(true);
        
        try {
          const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
              model: "gpt-3.5-turbo",
              messages: [
                ...messages.map(msg => ({
                  role: msg.sender === "user" ? "user" : "assistant",
                  content: msg.text
                })),
                { role: "user", content: prompt }
              ],
              temperature: 0.7,
              stream: true
            },
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
              },
              signal: controller.signal
            }
          );
    
          const fullText = response.data.choices[0].message.content;
          typeResponse(fullText);
        } catch (error) {
          if (!axios.isCancel(error)) {
            typeResponse("Sorry, I encountered an error. Please try again.");
            console.error("ChatGPT error:", error);
          }
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isTyping) return;
        
        // Add user message with attachment preview
        setMessages(prev => [
          ...prev, 
          { 
            text: input, 
            sender: "user",
            attachment: filePreview 
          }
        ]);
        
        await callChatGPT(input);
        
        // Clear input and attachment
        setInput("");
        setFile(null);
        setFilePreview(null);
      };
    
      const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;
        
        setFile(selectedFile);
        
        // Create preview for images
        if (selectedFile.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e) => setFilePreview(e.target.result);
          reader.readAsDataURL(selectedFile);
        } else {
          setFilePreview(selectedFile.name);
        }
      };
    
      const triggerFileInput = () => {
        fileInputRef.current.click();
      };
    
      const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
      };
    
      const regenerateResponse = (prompt) => {
        callChatGPT(prompt);
      };
    
  return (
    <div className='bg-primary-black  relative  overflow-hidden'>
       <div className="relative w-full min-h-screen overflow-hidden">
  <div className="absolute inset-0 bg-center bg-custom-gradient bg-blend-custom" 
       style={{ backgroundImage: `url(${BackgroundImage})`, }} />
  
  <div className="relative z-20 container mt-[166px] border-x pb-20 border-x-primary-white-20 p-0">
  <div className='flex gap-5'>
  <div className="relative p-[1px]  bg-gradient-to-r from-[#8C292F] to-[#4A4588] rounded-xl ml-6">
        <div className='w-[120px] h-[864px] flex items-center py-6 flex-col bg-[#1C1A32]
  backdrop-blur-[21.6px]
  rounded-xl'>
<h1 className='font-clash-display font-semibold text-2xl text-white'>Tools</h1>
<img src={Group1} alt="" className='w-24 mt-4 h-36' />
<img src={Group2} alt="" className='w-24 mt-4 h-36'  />
<img src={Group3} alt="" className='w-24 mt-4 h-36' />
<img src={Group4} alt="" className='w-24 mt-4 h-36' />
<img src={Group5} alt="" className='w-24 mt-4 h-36' />
        </div>
       
      
        </div>
        <div className='p-4 w-full'>
        <h1 className='font-clash-display font-semibold text-6xl text-white text-center'>AI Play Ground</h1>
            
       
        {/* <div className="relative p-[1px]   h-[602px]  bg-gradient-to-r from-[#8C292F] to-[#4A4588] rounded-xl"> */}
        <div className="
  box-border 
  h-[599px] 
  bg-[#1C1A32]/95 
  shadow-[0px_14px_29px_2px_rgba(151,71,255,0.2)] 
  rounded-xl
  relative
  p-6
  flex flex-col
">
  {/* Chat messages container */}
  <div className="flex-1 overflow-y-auto mb-4 space-y-4 max-h-[400px]">
  {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`text-white p-3 rounded-lg max-w-[80%] ${
              msg.sender === "user" 
                ? "bg-[#4A4588] ml-auto" 
                : "bg-[#1C1A32] mr-auto"
            }`}
          >
            {msg.attachment && (
              <div className="mb-2">
                {typeof msg.attachment === 'string' && msg.attachment.startsWith('data:image') ? (
                  <img 
                    src={msg.attachment} 
                    alt="Attachment" 
                    className="max-w-[200px] max-h-[200px] rounded-md"
                  />
                ) : (
                  <div className="bg-[#2A2740] p-2 rounded-md text-sm">
                    📄 {msg.attachment}
                  </div>
                )}
              </div>
            )}
            
            {msg.text}
            
            {msg.sender === "bot" && !isTyping && index === messages.length - 1 && (
              <div className="flex gap-2 mt-2">
                <button 
                  onClick={() => copyToClipboard(msg.text)}
                  className="text-xs bg-[#4A4588] px-2 py-1 rounded hover:bg-[#5A5598]"
                >
                  Copy
                </button>
                <button 
                  onClick={() => regenerateResponse(messages[messages.length - 2].text)}
                  className="text-xs bg-[#4A4588] px-2 py-1 rounded hover:bg-[#5A5598]"
                >
                  Regenerate
                </button>
              </div>
            )}
            
            {index === messages.length - 1 && isTyping && (
              <div className="flex items-center gap-2 mt-2">
                <span className="inline-block w-2 h-5 bg-white animate-pulse"></span>
                <button 
                  onClick={stopGeneration}
                  className="text-xs bg-red-600 px-2 py-1 rounded hover:bg-red-700"
                >
                  Stop
                </button>
              </div>
            )}
          </div>
        ))}
        </div>

  {/* Gradient textarea at the bottom */}
  <form onSubmit={handleSubmit}>
        <div className="relative p-[1px] bg-gradient-to-r from-[#8C292F] to-[#4A4588] rounded-xl">
          <div className='bg-[#1C1A32] h-full rounded-xl p-4'>
            {filePreview && (
              <div className="mb-2 flex items-center justify-between bg-[#2A2740] p-2 rounded-md">
                {typeof filePreview === 'string' && filePreview.startsWith('data:image') ? (
                  <img 
                    src={filePreview} 
                    alt="Preview" 
                    className="max-w-[60px] max-h-[60px] rounded-md"
                  />
                ) : (
                  <span className="text-sm">📄 {filePreview}</span>
                )}
                <button 
                  type="button" 
                  onClick={() => {
                    setFile(null);
                    setFilePreview(null);
                  }}
                  className="text-red-400 hover:text-red-300"
                >
                  ×
                </button>
              </div>
            )}
            
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-transparent text-white focus:outline-none resize-none placeholder:text-gray-400"
              placeholder="Type your message..."
              rows={3}
            />
            
            <div className='flex flex-wrap justify-between items-center gap-4 mt-3'>
              <div className='flex gap-2'>
                <Button type="button" className='btn-secondary'>
                  <img src={MediateIcon} className='w-5' alt="Mediate" />
                  Mediate Over
                </Button>
                <Button type="button" className='btn-secondary'>
                  <img src={SearchIcon} className='w-5' alt="Search" />
                  Search
                </Button>
              </div>
              
              <div className='flex gap-2'>
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*,.pdf,.doc,.docx,.txt"
                />
                <button 
                  type="button"
                  onClick={triggerFileInput}
                  className="cursor-pointer hover:opacity-80"
                >
                  <img src={AttachmentIcon} alt="Attach file" className='w-6' />
                </button>
                <button 
                  type="submit" 
                  className="cursor-pointer hover:opacity-80"
                  disabled={isTyping || (!input.trim() && !file)}
                >
                  <img src={SendIcon} alt="Send" className='w-6' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
  <p className='text-primary-white-30  text-sm font-montserrat text-center mt-2'>Chatbot can make mistakes. Check important info.</p>
</div>
<div className='mt-4 flex justify-center gap-4'>
<Button className='btn-primary'>
    Prompt Library
</Button>
<Button className='btn-primary'>
    AI Modal
</Button>
<Button className='btn-primary'>
    Output Language
</Button>
<Button className='btn-primary'>
    Persona
</Button>
       
</div>
        {/* </div> */}
        </div>
        <div className="relative mt-[70px]">
  {/* Drawer Content - Now with sliding transition */}
  <div className={`
    absolute right-0 top-0 z-10
    transition-all duration-300 ease-in-out
    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
  `}>
    {isOpen && (
      <div className="relative p-[1px] bg-gradient-to-r from-[#8C292F] to-[#4A4588] rounded-l-[31px]">
        <div className='bg-[#1C1A32] p-4 backdrop-blur-[21.6px] rounded-l-[31px] w-[216px]'>
          <h3 className='font-clash-display text-base text-primary-white-50 text-center'>
            Select <br/> Comparison Count
          </h3>
          <div className="flex flex-col gap-2 mt-2">
            <img src={Grid2} alt="2 comparisons" className='cursor-pointer hover:opacity-80' />
            <img src={Grid4} alt="4 comparisons" className='cursor-pointer hover:opacity-80' />
            <img src={Grid6} alt="6 comparisons" className='cursor-pointer hover:opacity-80' />
          </div>
        </div>
      </div>
    )}
  </div>

  {/* Toggle Button - Fixed height and smooth movement */}
  <img 
    src={ToolsSlider} 
    alt="Toggle comparison options" 
    className={`
      cursor-pointer 
      transition-all duration-300 ease-in-out
      
      ${isOpen ? 'transform translate-x-[-216px] ' : ''}
    `}
    onClick={() => setIsOpen(!isOpen)}
  />
</div>
  </div>

  <div className="
  absolute
  w-[200px] h-[200px]
  md:w-[400px] md:h-[400px]
  lg:w-[710px] lg:h-[710px]
  lg:-right-[300px]
  bg-[#4A4588]
  opacity-60
  blur-[50px]
  md:blur-[80px]
  lg:blur-[107px]
  backdrop-blur-[10px]
  md:backdrop-blur-[16px]
  lg:backdrop-blur-[22px]
  rounded-full
  -bottom-30
">
</div>
  </div>
</div>

    
    </div>
  )
}

export default ChatBot