"use strict";(self.webpackChunkportaldoc=self.webpackChunkportaldoc||[]).push([[847],{5065:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=s(5893),n=s(1151);const r={sidebar_position:3,id:"trim",title:"Trim",description:" "},l="Trim Filter",c={id:"filters/trim",title:"Trim",description:" ",source:"@site/docs/filters/trim.mdx",sourceDirName:"filters",slug:"/filters/trim",permalink:"/doc/docs/filters/trim",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"trim",title:"Trim",description:" "},sidebar:"tutorialSidebar",previous:{title:"Duplicate",permalink:"/doc/docs/filters/duplicate"},next:{title:"Skip-Delete",permalink:"/doc/docs/filters/sandd"}},o={},d=[{value:"Using the Trim Function",id:"using-the-trim-function",level:2}];function a(t){const e={h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"trim-filter",children:"Trim Filter"}),"\n",(0,i.jsx)(e.p,{children:"The Trim Filter is essential, especially when dealing with merged files in seismic data analysis. This process ensures that merged files adhere to the standard time frame for consistent analysis."}),"\n",(0,i.jsx)(e.h2,{id:"using-the-trim-function",children:"Using the Trim Function"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Context"}),": Often, merging two files leads to a doubled time range (e.g., from 1000ms to 2000ms). To revert it to the normal 1000ms, the trim function is used."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Application"}),": Click the trim icon on the toolbar. In the trace view, a box appears for selection."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Trim",src:s(7551).Z+"",width:"406",height:"69"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Selection"}),": Select the portion of the data you wish to keep; the rest will be trimmed off, effectively shortening the file to your desired range."]}),"\n"]}),"\n"]})]})}function h(t={}){const{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(a,{...t})}):a(t)}},7551:(t,e,s)=>{s.d(e,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZYAAABFCAIAAADmR1f0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACPqSURBVHhe7Z15kFxV+ff73t67p7tnX5LJZCcJZIOEBBB+SFjEF1AEl6KsX/lqvWqVW4kKpa/6h0pZVlkWiD+hsNCScn0RjezIKhFjQgiGEEJC9mWSzNIzvd++a7+f7nPTNjM9Mz1JD8nA/VRX59xzzz33nOee53uf5053RyoUCi4HBweH6Yls/+vg4OAwDXEkzMHBYRojbdu2zS46ODhMN2Z+/L/t0tlK74O/sUtTg7R+/Xq76ODgMN245Lbv2KWzlY0/vsMuTQ3S8PCwXXRwcJhumBddbpfOVtybXrRLU4OkaZpddHBwmG6kl19ol85WItu32KWpQcpkMnbRwcFhupFfdYldOlsJbN1ol6YG5y+SDg4O0xhHwhwcHKYxcjKZNE3T3nJweFegKIqzsN8jyC+99FIul5Mkya5wcJj+7Nmz5z2ysC3LOuNKzQAYxpkytXTfffddd911TU1NzpclHd41bN68ee/eve+FhZ07/yLkw+Px2NsVTPVzdMHQ0NATTzxx00/+x+12VzW18zj/LIIr5HA2Y1+nMbAbvSuwpzQudtMpwz7NRNitpwDRvyNhtYLJuN05nOXYV2sU9u53EfbExsZuN2WURWR87NZTA/07EjY5SurvcJZiX6QxsBu9K7CnNC5206nBPkcN2AdMAaJ/R8IcHBymMY6EOTg4TGMcCXNwqIJlmdl8Mq9lTEsv5yz1pVCwND2vG/mpO8VYlPKwd/SMU4cjYQ4OIzFMPaemBhKHE5kBzVALrinxdlQypyaT2cFUbhAhswoTP6GvF+iXVfPz+HcSzbAyeSOdN3KaoRtmLSN0JMzBYSRoysG+HTuOvHR0aHdezRasKfnsqGHpg6nje45tff3ghsHUUVXL2TveEZAw8ZFUe/ssAME6kci9dmjolQPx3b2J/mTWMCcenvPR1loZfeNKJBL/+Mc/eLe3J8Py5ctXrFhhb9SD1157bfv27fbGZGhsbLzssst4t7dPmzNoFrkEhdEfbeXa1eKumpGPJ3tT6mA6PxjPHGuPzOlpOS8WbvO4vXaL+pHXsgdO7EhrA5akh7yxWKA9Fm6PBJvdcpXPqY6gPNNxPtrq2bzBLo2CQ9AvLEMnVY+dEEmSOJb3CT/aOs4wKuFYQrAd/dk3BhXd7wuYerPLmNscdksSnbY1+MIBr8/jtluXKNlAdiSsVrAPF77SSgcPHvzBD36Ar2I9u6oGNE3r7++/5ZZbPvWpT9lV9eCBBx74wx/+0N7e7vP57KoaGB4eRry++93vzpkzx646bc6gWcSapnAKElZyISWVix8eeMOSNY/foxta2NPS6O+Mhls9chUJw4t9Hr8sv82v3k5xzRimxrpxjfr6japlD/XtdAckX9ATTxzzukKxQEdbbHbIH/W6J7iI5ZmemoQxWSTMMAw64VjR1aSol4QVD+Cwgks3rZSibe5XtyYMKxYyhtOBZHpxa0gqnsQ1r9Hb3RhujQSKGycpmsCRsNrBPqyVSisJX129evVHP/pRu6oGjh49etddd61bt67uEvb8889/9atf7e7utqtq4KGHHnrllVemQsLOiFnEmqYwWQmjjWkZRwZ29g6/FYqEAoEgDpnOJNSc7tLdoUDMXU2n/N5Qd9uioL9BlqpLAPKlaNn+4cOamberKtD0/ImhA7HGWEtbh1kwFCWjKqqv0NDVNL+jaYLLUZ7pKUsYR4mfO6UfbnuV0lALdZGw4jCKIymouplUtAODuY39xtaEZbldVjbv0425MxqjLSG/3yX1Da7palg7p0WcVBxeNAE3kBtuuOGcc84JBoOitkw6nT58+PBLL7304osvbtq0iTskcw6FQgx0srOtL7lc7siRI48//riqqjNnzrRrT0JY8eijjw4MDCiK8uc//zmfz/f09Nj7TpsRV4hAY8OGDUuXLr366qubawYzvvDCC4xq5cqVdkcnoX9ujC+//DJmZ2qjL8o4kEj29vbefPPN8+fPt89UAzt37ty3b9/ll19emUhiNCq3bt3KpSclfPXVV1ElnISF7mc1TUR9zYK0bdu2DYMwko0bN5Isc4kZDMZhKdqNTsLKFIsTU+BalQsb2464fGWIkrL5xJH4m4n8Mcuj+kM+r9cju4ve4XaTQbo9PrfkcUmeQuVLNTOqocRCrT5PYKxATNWVtDIUzx7RC4rksUgYK18F2XB5rGA47A/4XTKOrJv4sqWqek5VFb837Ja9Y/laeab6ffczL8Yq6iuRP/tpu1QNjsLmIp1knlV7GAcxAMDR9uzZs+RfL4/VQ+UwTKuQymmJnJZVda/HnVD0w0PK/qH8nr70vv7sUUXaP6QNJpS2oDfmcftkeVC1Uh6P6pWteH932NPT3MBZOKnoTQygylmZkq7r6BfK9be//e2RRx557LHHKO/YsePAgQPxeJwlbjc9E6BcjO33v/89CxrzcRnsHaxFwzh27Bj5FC6EzHFzwEXtfWcUBslQjx8/Pjg4iARXjrkSpkbsgMEJqbCzXVtXuLhYCRXAUKlUqurPjjPCf//738R0GPCvJVgAWJtD7BZ1ohazoJ7PPfccI8Es69evZzBPP/008kp7u8VpUFzqpobK9CX37xvYkjKOBSLuglvVXTnTpRGLRWONTS0tDY0N4VhoxEv2FzRX1jBVQi27u1FoBnFVSi1kCl7NG5JHvPwN3pbWtnBD2HIZuqUUZN3ttwr+3KCyf//Aq0OZXkXLWAWTYdrd1Q/h/BSwOesBITOJQq1CVjOH8/pgThvIafGcnsgbOd2kXhx1mqBfWdU4OJzfPZjdNZA9klR433Q0/dzR7LMHkxsOJ3blpEHFRBS7fK6emL8l4o8nlWPxzHBKibiNUDHIqzKSKhKGfhFzsW4IZ5YtW/b1r3/9Jz/5ySc/+UkWzW9+8xtEjVVlNz0TRCKRGTNmtLS0ECfi8Li9vcPlwu1RLgptbW1r165l2B/5yEfErjMLpmOo995775/+9Kfdu3ePdQ9AI0jBCB4zmQxryq6tK3RLlIQK/OxnPyO06evrs3dUIJR09uzZt9566913333bbbedf/75Tz75JCmn3aJO1GIWRkv9xz/+8TvuuOOnP/3pl770JbyO9nX5b2uIv+LJY/v6tu4e+Ifm78/KxwZye4aV3ow2pBpp1czqVt6wtKqvkrjUAGGCW5bcckEmWKryMgqaZubyejpD/KEeG9YOKe7jWffR7UeeOzSwPa/lTvPDFkW/L4HdKqGmrGLcyfKaNqxo2/tSz+6P/2ln3x93nFi/u//5g/Fdg9lhRR8jfp0cmbx2YCi34biyYcDcMGj+/vUT/293/OlBfZs/8lYwvN/t2e/1DLjdSsE1lM/05nO93AFUwxtPtQ0PX9zdtqCjyeutEpZWSSS5ObO4Dx06FI1Gr7jiivPOO6+7uxvhQK1Zc+RohP2sb1oidtw/STdIAYjziScxB3tFsskuYiVSElbbU089RWT0xhtvcBSdEOcjhRxFjkBSQHoiBsB5ueFzOMkLPvPWW2/hck1NTZXRI2XOe+LECd5hzpw55cHv2rWL8IGWuFxXVxenoCwSSQaPwDEGMVQ8h0tIz+Jc1JBJBQIBWiaTSTafeeYZsmZqsBoDxnuJQzs7OysNJTImErdVq1bZVaPAINlslmnSkhgWSzKwLVu2zJs3b3QiyWRxVyzMITfeeGNra6u9owZIJAlOr7rqKiZlV40CbUKzsADpGJNiAERAMCKRFIt74cKFixcvJp9lF9ZD9bjo3BjsRmNTX7NgE1bU8uXLudDct4ja9u/fT5K4bt260TNl2EChlkSyFHwdPJba2Z/flbIO6+6UUcihWaal8zKKQUlRO2RJLn4uTCIUeduLXI8mLeHuABnfGH+vJJFUtHTOSJCHery0YQD/edEJOkhCmtWHslqcV06PK0Yib6U1K61aGRRW1zW35COjHPEn0fJMJ0wkRTOhWbwDV1MgPEgUDiVy244nX+1N9GXQjYJuoTjGQDp/NJHN6wYjCHk9Hvk/8iEGALUnkhh0SDP/MajvS+t9qXxqKJ1XdGxo6GYmmUul85rlCltmo09KBV2DHk/C5TayRmvQOycWmBP1tDQEwsG3PccQA6hyVkIApIR9+MO5554rJImlsHTpUhQtHA6XlwLejsrg7YT3xA4PP/wwqxCXwCLsxRXvu+8+VAxFIAt48MEHH3roIfQOlcHf0BdqSPoI95BL0SELmjst7cliyBro8OWXXy53WIYxrF69mlHhA3iCGA/v9IOKobksd3F2OhSHoMss/X/+85+kJAz18ccfJxkh2KRnBvOXv/wFqWXi3I4IhZDRe+65hwa4ARcYLcYgzBHnFL3VCMuF4eGimzdvZiLEhgsWLEAUxvqjIZr12c9+9rLLLrO36wfGYSLM9/XXX8fg3FQWLVqEXlQqVxluXVz6Cy64IBaLYWSszchpWcuDsFqYlFmWLFnygQ98YNasWSJkI8puaGjgElfeSyZPAe0YSh8/OPBab/q1hLVf9QwoxqCik0Uls9pwWh1I5fvT2qBipHVLtQqGWSANGvnCqrYnjAsKWHpmjQv/52XysnTdVHJaMp0fSKl9GW2AUyt6AiHLmv26b3BA271/cMuxobcyymmFnMVxlsDy3BKAZc/9jPslBRZGXlF2H4+/sOf4tiODaUVrC/lmRgIxv0fRzK2H45sODuw8QU45Zr48IchnXjeRRUOSBzWzL5MfTufdpqtVlmdL1oxUKprKShktP5DwF8xYc3DAch3XrYTlkoL+YKzBE4n0Z7Rkrvr/tVZFwpjYm2++SXC0YsWKyoVCVII0ENKzuEXNzp078W3ut1/+8pfvvPPOD33oQyR3BFxIm2gA1OAG3/rWt77//e8T8e3YsYOFi9W+9rWvfe9737v++uvRi3/9619269JPBtMtCvXjH/+Y9qx1JBIBsneXYCSMgRAJ+WcXvXF5UJ+jR4+S5LK+RZBYCQEg58UzOeldd9118803cwmfffZZDie2Yl4ci4dTidKhZbgrXaGDWANZpH98XoRptYPX4ajIND1gJbJawsOqwfBUw6pFf7k3INZcjksuuYSLhXZQtluMDVMgy/vgBz84TlQ1KU7NLNxCyCLvv/9+1uQtt9zCndXeMXnw5LyajWeO9KXf0tzDupQmbdQthfTQLMYfSAwKRXCgKHo6p6cMVIxowTIrXwhCUZ2Kr/EpKhgB3YjDi8GQqWb1ZN5WSSGLRV3jdDoir8UtT8byp/f1vdKfPMgKtPubPMRHXGg8ugybIrMRMJPhbL4vmYn4vcu6Gq88p+PKBa3Xn9t57ZLOtrAPVdt9YggNsrubJIybYw/0p7YeHnp5f7z3QF9TTlnbFLzsnK6LlnSvWjTz0iUzL53fsbw96im4+nyBw8EG43jCt6/ffywZjASTDcG3dJMBDCTtYGUEVSSM5Y7uMENuvJVLnBpWT0dHB0mlqCHqQW4I1xGUZcuWkWVwLIEYuiMaADnCmjVriOBwAMRFPKuiMUkKNagkrlUZ3SAT7KIBh5Q7ZNHbu0swKiIFUg8yC4QG6UFokDPeuV23t7ejcXbTkzBUAhB2ic6RSHomPaRnZoTkkYXRDzqIhOFOuBbhmOiZSJMeSKyqShgRDbpMzEhvaB9LlUreKRMkor90gkReeeWV9IBJx4q3Tx8Gj3mJcx999FEyKeRY1FMgkiUTxAJM7dJLL2X6CPeEf0qnQ8xCKEogxkVkFvaOGqi7WVhm11xzDRklo6JnbnX2jsnDrMnLmhq6OmMLPWZENgMeyY97FFwmyR2KU/I74iaUhiglX3qorRbjplI4Jl7sLUrTRF8+KvVFM/uo0qvYj2bSbVZ0W+ynmJwW25Ya8yp4pIDbCvsKjTOaFzWGO8a/UhNSFKrSxyCElok/LuMmeZf7YFrf3Jc7kjNdsjuj6nsH05sODW0+mnj5yPDrxxKJnBryyh2RoPdU162qm0M5fV+m8Eaq8GbSzKU1UytoLm/C9J7Imb3J/JAu5ySfKftdqqUks4nhlFvPz/OpF0eUxf5cqzYcVIZ7mgItDdWTgOrDwoJMmNnybledpHilT2ohqxCfwf9RASxCOkAl0X7ZeWDu3LkXXXQRqsdtk2asbNKTlStXYj5qUBwMWu4QSBNQLnIc9ILFTQ0Kgo6IvWW4GJyXyIi9jAElEk/BkEXONdofGCqhJaEWWobq4QZ9fX1C9RhVT08PvkqNiMLogRGySQopxJEecKGqmRRxHA1QDbSD4AL5JjgfkShhAfEJ+KnTLxCp4qZNmwhYyI4pMxKgUM4fke9169YxF8w++uJWgom4tTALusXUHDKpZ3N1Nwstidw/9rGPcY2I3Csj/cmCL/u8wc7G+fPb1za554ddXX6pCclgybPz5GdQi58KR02IyzSDjCpvFJ+RCRUTyaAtOqL1OJQ0qRRhlV7Fhz+Wppn0qRCLnVz89sWQEBLJ7ZVCYamjwTWz2TN/8YyL2xvr86m9sopxJ8O/gqFQwpBeH8z963j2mGJ5fb68Ye4dSG/Y1//3ffG/7xt49eiQ5LLmNjcs7WoKeicO2KuiGibp8RGlsE+RDuUls+BWZN/xgndfUj8cz54YTh9OqMfyUrLgkwzJTJBPD0a91rIO91WzPGsi2nnuzDmycv6sphktkaortsrSYZJMj9asFXHzLMMmlaxpsckq52bINaAxYBrKrNRKSRKSX7lGKQPt7e23wy4URAygaodluIfjkAgTqoSEbd26lfbIHyGD3aIChorY3X777f99kj/+8Y8iOsCXUFLUjbSR2SFw1OAwRB/ij/0cyGDw4apRGI1R0hkzZpAWkRzhovF4nPd3Pn9EYZF+zIIdSBhJGxkJnFr+SBBK9o2CE7pyc6oq3+MwFWbB/vTJiqIfrpRde6r4vaG26KyVs6+ZHVkbVGdF5FlBudkteSVX8S+ISIlL4lX8dguhUyloygghIw00UbZi3FQLrF0kjICulDxaml7qiviLyqJgMn1J5nSsd1kix/MHpZaoa06Ta/H85vct7bm8IVj8c5bdWf1AWDXT2h/Pbu1NoqwFSyoU5LltjRf2NF/WE1vWGljVGb5yfsv/Wbvg+qWzFrbH/KcqYcWhF6xUNhVPpxOaITdHCy1N+XAor6YXN1nXLQy3+gzZIxfCDYFY1OfxBXVzUdi9ortt1ZL5V547+6aV825cOa+nvTU4xmOcKqZBcbjrkmft27evcqFwC6XmwQcfJN4RNViW9STKIIRmhLm5QqMvwPirln7KcOxY+Q5BHB6Cnp44cQLdEfkOI6/qbPTA3f6KK6644ST/uwSpKP0jmuwl6CCEJFnGaQnNCDqIX5gsc2Qv4WHVlYRfkdLSM9pBe1IksqfRidL4U64LDI+JIOukikgDkRcjgcnmj9wz0C/ECwszBUxByFx17uNQL7Nw/3jhhRe4xCxFhsQKJL7jWtSiwuMjF2OxQCzcMat52cK297V4FoVdM/yuJq8clCXSJsQ16NJkNaOp2Xw+k8ulstlUOpNMplOJTCqZSScVpfh0phy2jaa4yyoouTSNM6lUOpXiPZtOK+lcPpNXs6qaUV267HeHin9zlP0+ucFrNMbked3hC+a1rulqXIh+FT/gOvYpThkEWNHN4byh6IV5LdGlM5rntcYKkjsW9J3XGV0zq3FtT/OFs5rP62qcGQuFfB4k1j5ykvi87rYG/6quhp4GAn+zEAuqLaF0UzARDCTc3oTLHXfJGZ/Xagi6w0FvQ8gfjQWa2g13QNH0aMDXEQ11RMMBH1ek+gqsUosPL126FGnYsmULd04RBPHe29tL/P/II4+UPy/Kyo5GowQ4LC8kj6CGFUnN6SwvzssqT6fTxEcsVrrCkSqFsgzjRIDYyyDxUtFSfE7CblEB6obPfP7zn/+/JW699dbPfe5zCJnwIvwNv+J0CBZOjoRRQ0RDzxs3biSgAJqB3V0FWJZOiNpIi2iGiZ588slTyx+xJBElJ6WAKFOwd9QGw8NQRIukiggZaSMjgUnlj0Dg+eqrrxLpiEvPMNARmNR46mUWNOv555/fvn07sRsLj4gSITv33HO5QHaL0wBpcMuejsbZCzvXdgWXklQ2SF1eF64W8Eg+jysgG35Z9Xv0kMcIuY2ApHtdmrugyrwkw+spFD/uwC3a7m4UbtlNVCVbHpfucaluXpLqlTWfRw96jRDdWoosm36/HC6e0RX0uWIkj23+JbNiq2a3LWsMt9sdTQFcWVI8jbzO7ZnbGlvR3bqkq1HRCc5cHZHguR3RpZ2xBa2RppB/xJerJ4vfg4QR00UXNPnDPskKepSoL9XkH2qK7pEDr+TkA27fcMCvhrwmZwoHPbFoNtg0pEnxRBpVYZHg0eMs2irW5xbHCsOLUCuys76+PmSFJIub4RNPPIG6iWdeMHPmTMp4HW3IKLdt20blihUrRj9Nrx105LnnnmO94kivvfYaNeLBmdg7AoSJzFEcgn8iQ/aOUXR3d+PGTIpuGSou8dvf/vbee+9lXuwlcCNDSSaTmzZtwsdAJGXiz6PEeoia6Kcq2Jcwh7SI5IgUCRE8tUSJmwTy+te//pXCt7/9bQr2jsnA9Wb8JIykjYwEJpU/Aunzr371q+985ztf/OIXP/OZz4hwFSY7nrqYhbiSlg888MDtt99+2223sQh7eno+8YlPcLuyW9QBKeANz+86f17LqlbvIq/W5DGLmqKpWszfsbjzkvNnX7Nqzv9622vuBy8+58YLF17X2NBR9RvggoAv3NE454J5165ZcMMFc6/lqNKLw4uv5d3rZkQWhz1NsssbcEdkLexRYvObL5rfvqqjafaE3/Q+TbCqz+32siQkOWu4GnyenljQLctJ1ejP5pEyu109IGPtHVZcLk8XIaZp6oae98rJtobXIw1/9wUPtUbizf5koJAuaJqlarpycDCeUZWI3yNXfBJtLKpImPBelIikbPPmzb/+9a/vvPPOX/7yl9yH0az3ve997BUtcfs1a9a8+eabv/vd737+858/++yzREbkDiw70eAU4OaA9L700kvoy4svvoieXn755bzbu98O0obAsZq5My9fvlx8irUqDHXVqlUoMtO5++678UYEi4mIrJNbOg3IsNBidBDBEkaghuxS1Ih+xoIFQVhBoHfNNdegF7yfQv4oJotYfOUrX7npppsQZXvHZCguTZ8PveDSMBKgwOaE+WMZ4uhrr72WAXDsdRWcwnhO3ywswve///1XXXUVQxLDQJGRQnHh6gV3+qA/0hKZ1d107szIsrDUYeQklyl73cGwvzEabB3xigRaY6H2WLgVoRlnLnRLrhoNiUNaRrwaAs3FL0JKPpfpNnPuRu+suS2rCH2ioTafJ1D1M5t1BHEIet0Rv9srS71JJa0ZAY9sWWYeCVGNYjBWPwzT6kurCcNleX2ybroSWXMgaRhm1uNOeH15t5xX8vlE0tKUHo96WcxY1+U/rz3SGG3w1HDTrWImcg0SNKJ91g1+Tui+fv161IR7OA6GPxCViJaspAsvvDCbzRK8EKAdPnyYXRdffLF4oI7P4Px0JRpDjTVETMePH3/qqaeOHTtGh5yx6hN6YB0TBqI+OAZBVkdHh71jVM9z585FlI8cOUK89vjjjws5vvrqq3FX9tIPDVDArq4uumptbeVwaoDB4Lq1/DGOiJc0Fn+7/vrreadcY/5YhkCJ9Jb4S0AsbO+YJDgVF3Hx4sWMBCjUkj+WGTGMMqc2ntM0y6xZs0iBP/3pT5P7f+Mb30DfV69ezXqYrG1rIRyIdTbOnd28vNk3262HCobbZZFrYjeMVwXq7SMnwj5gNMWHZaWc1GjoCC+Y37mK5BH9sg+bSmRJQsJaQr6moPtoInNoOBvPqXlVs0xDchVqnVhtoIfFbzyYlmQZrZIRS2e8x4fciZyk6AXdKGTy1lBaGkpFJHNJyLq6RfrI/MZV3c3Rah8tGM2YP7Yjci4kjADHsiz6IuQhvIJyPkI9zeLxOC0JnRACbrCIAo25OqqqIhmxWAyXEO0nrPnhD3/40EMPEX+hXCgjwVG5Q9G+KkNDQ5lMRgQadtWonsVQaclQdV0nkWEXiIxGhH4kUOl0mlMTS3KIaM8w6JkaZk0nlVY6WPpVGSILHN6uqoH9+/d/85vfvPTSS+v+YzuErj/60Y/KMXIt/OIXv3j66aen4sd2zohZWCdiqZA97D2lnzwsroTiL+SkB1NHXz+4gTRw4YzV0VDL1PzkYe5w/87h7ImCy5rbsTwWavN7gzUGX+WZntqP7ZTZO5jecjj+t13HzWI27e6NJ69a1HnTitkzoqHxH4HhNQyAd3yE8GX8H9tBvIYy+X8fHdzVn4j53Xtz0vaMNODyKhYBmunS9EjQ394QIqleGdaXRwtzOltDAT+dg91LNYQRzq7fC8MDSfHI9Qgc7KqzBuzDWqm0kvBVAjTiAruqBoaHh5955hlCkrpL2GOPPUZcyaW0q2rglVdeQbinQsLOiFnEmqYwWQkbsfhN08ip6SMDu8LBxrZYd8AbIiW095W81y5NHk5UPpdhaonsoKIWv3nS3tjj86Bfds+jCyMoz/Q0JSyV1w8PZ17ce4IoLKMZUa/7vxZ0Xja/I+Tzusd9DsXAGADvtUgY9eSSx4fT/alMJOB9dUD7Z7824Anq2Ywvn+4IyKrbr8q+To91fqP7gvbgrM42v2/ie4YwwtklYffff//zzz9/xx13TCqUeGfAPqyVSiv19vbec889ZLv29mT48Ic/fOONN9ob9QDpf/jhh+2NyUDU+YUvfIG02t4+bc6gWcSaplCLhJUvZfnKCkSNABcFakRhBKK+2MW42H2dHIa9UaK8t9xbmaJznkTs4r1Meaa1SxhnGTFNUVn89k88tbsv0ZdW5rdGF3U09jQXn2WLM4phiHNVIip5r0XC7FLpdBy55Whq47FM3B+SU0Ot+aHlXZHjqrw3YRbUzIq28OpZLW0txR+lsI8Zm6IJzjYJGxgYSKVS3d3d9X1YWxewj1gB9nYp0+wvfSfJ3p4MGBzsjXpAFAP2xmQg+26f5M9Vj88ZNItY0xQmlDBxNcGsQGyW38WBok/ARcV7JWKX6LMqdFLus5LyWYBmaIEQhXK3qFK5LN5pIPoENoFCjRLGMAzDUBQln89TEGMQRmBDNczS17CtoNcT8vsC3uKTU05Kt3hiMBjkvfLsIEbL+6QkTNA7nNnbl9g1mG6QzDlR3zmzOgul7zaZuh4L+hsbGEVNj26FEZwfnq4Vcb0dK53NiDVNoZYoTFxNUV9WE0H5WuNIAtFzVdhr91gNOhG9VUXsFS3LZxEFIVsCUSOaCUQ9hdolTNd1IWEUhIqVx2A3qhgDMABCISFhgdK3ZexGJURL3k9BwnIqGbTSn1L8sqsp5GtpjDJVMR6hm3a7iRDjHO8G4uDwLobFLxyGCBQXDYVC4XC4oaEhEolEo9HGk8RiMTapZy9tREjCIbg3h49w7NEIVxdnEXJAJ+Is9Ez/xbCzBGVxIqANQ6K9OEtd/JROhCQBnYuRjIDKMmIADJsB2F3UCQK9Gc2xlXM6l/R0dpAzlv7/ETG22vWrjCNhDu9pkBihMuJdiJoAp7JLJYSUCGhsHz8ZSqf6z7nGhzb2YfWA3hg/qoR0IpctLS1tJTo6OjrfTnt7O/U0oBmSipZhh/oOppLT79mRMAeHIvhSLditTw+7rzGwG9UbekYZhUajSkCEVRWxF4RwT92Q6oIjYQ4ODtMYR8IcHBymMY6E1Uopxp/4EYbDGWSclOdddu3GmWkZu+nUUHSG2hJM+4ApQAzAkbBJYFvO4WxlHKdil93oXUEt8mE3nTLs00yE3XoKcCTMwcFh2uNImIODwzTGkTAHB4dpjCNhDg4O0xh56dKlgXr8DLmDw9nDzJkz3yMLW/yZwt44EwSDwWXLljGMql+QfAeQMpmMXXRwcJhu5FddYpdGEdi60S5NPWdwGE4i6eDgMI1xJMzBwWEaIyUSCbvo4OAw3TDW/pddOlsZ/Xth9UU6eOigXXRwcJhuhK++wS6drWSfedQuTQ3S3n177aKDg8N0I/bBj9ils5Xkk+vt0tTgPAtzcHCYxjgS5uDgMI1xJMzBwWEa40iYg4PDNMaRMAcHh2mMFI/H7aJDXSm4iv97oGmaRgkK9o7JIEmS+C8Yyv8Rg+Sq6acyHd4jFC65wi6drUgbX7BLU8MZ+3Lmux4Mi3Lpup5X86qqapqGitVubfH1XZTLV/r/B/2+4n8pWP6lSgcHB4EjYVMItgViMbRM1dR0Oo2isWnvHhuhX6FQKBwKe31et1yKv0rYLRwcHMDl+v9qnUCyf47TuQAAAABJRU5ErkJggg=="},1151:(t,e,s)=>{s.d(e,{Z:()=>c,a:()=>l});var i=s(7294);const n={},r=i.createContext(n);function l(t){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:l(t.components),i.createElement(r.Provider,{value:e},t.children)}}}]);