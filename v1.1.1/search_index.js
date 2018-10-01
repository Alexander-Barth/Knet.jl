var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#Welcome-to-Knet.jl\'s-documentation!-1",
    "page": "Home",
    "title": "Welcome to Knet.jl\'s documentation!",
    "category": "section",
    "text": ""
},

{
    "location": "index.html#Manual-1",
    "page": "Home",
    "title": "Manual",
    "category": "section",
    "text": "Pages = [\n \"install.md\",\n \"tutorial.md\",\n \"examples.md\",\n \"reference.md\",\n]"
},

{
    "location": "index.html#Textbook-1",
    "page": "Home",
    "title": "Textbook",
    "category": "section",
    "text": "Pages = [\n \"backprop.md\",\n \"softmax.md\",\n \"mlp.md\",\n \"cnn.md\",\n \"rnn.md\",\n \"rl.md\",\n \"opt.md\",\n \"gen.md\",\n]\nDepth = 1"
},

{
    "location": "install.html#",
    "page": "Setting up Knet",
    "title": "Setting up Knet",
    "category": "page",
    "text": ""
},

{
    "location": "install.html#Setting-up-Knet-1",
    "page": "Setting up Knet",
    "title": "Setting up Knet",
    "category": "section",
    "text": "Knet.jl is a deep learning package implemented in Julia, so you should be able to run it on any machine that can run Julia. It has been extensively tested on Linux machines with NVIDIA GPUs and CUDA libraries, and it has been reported to work on OSX and Windows.  If you would like to try it on your own computer, please follow the instructions on Installation. If you would like to try working with a GPU and do not have access to one, take a look at Using Amazon AWS. If you find a bug, please open a GitHub issue. If you would like to contribute to Knet, see Tips for developers. If you need help, or would like to request a feature, please use the knet-users mailing list."
},

{
    "location": "install.html#Installation-1",
    "page": "Setting up Knet",
    "title": "Installation",
    "category": "section",
    "text": "For best results install (1) a host compiler, (2) GPU support, (3) Julia, and (4) Knet in that order.Host compiler: On Linux, the gcc compiler that comes standard with all distributions is supported.  On Mac you need to install Xcode which provides the clang compiler.  On Windows you need the Visual C++ compiler which comes with Visual Studio or Build Tools (I have tested with VS 2015 because VS 2017 was not supported by the CUDA toolkit as of December 10, 2017).  If you don\'t have a compiler, most of Knet will still work on CPU (slow).GPU support: If your machine has an NVIDIA GPU, Knet will automatically discover it and compile support code if you have the required host compiler, driver, toolkit and cuDNN library pre-installed. Knet uses the CUDAapi library for discovery.Julia: Download and install the latest version of Julia from julialang.org. As of this writing the latest version is 1.0.0 and I have tested Knet using 64-bit Generic Linux binaries, the macOS package (10.8+ 64-bit dmg), and 64-bit Windows Self Extracting Archive (exe). Knet: Once Julia is installed, type julia at the command prompt to start the Julia interpreter. To install Knet just use using Pkg; Pkg.add(\"Knet\"):$ julia\n               _\n   _       _ _(_)_     |  Documentation: https://docs.julialang.org\n  (_)     | (_) (_)    |\n   _ _   _| |_  __ _   |  Type \"?\" for help, \"]?\" for Pkg help.\n  | | | | | | |/ _` |  |\n  | | |_| | | | (_| |  |  Version 1.0.0 (2018-08-08)\n _/ |\\__\'_|_|_|\\__\'_|  |  Official https://julialang.org/ release\n|__/                   |\n\njulia> using Pkg; Pkg.add(\"Knet\")Some Knet examples use additional packages such as ArgParse and JSON. These are not required by Knet, and are installed automatically when needed. You can install any extra packages manually using using Pkg; Pkg.add(\"PkgName\").To make sure everything has installed correctly, type Pkg.test(\"Knet\") which should take a minute kicking the tires. You may need to run Pkg.build(\"Knet\") to make sure the CUDA kernels are up to date when using a GPU.  If all is OK, continue with the tutorial section, if not you can get help at the knet-users mailing list."
},

{
    "location": "install.html#Installation-problems-1",
    "page": "Setting up Knet",
    "title": "Installation problems",
    "category": "section",
    "text": "Sometimes when Knet or CUDA libraries are updated or moved, the precompiled binaries get out of sync and you may get errors like:ccall: could not find function xxx in library libknet8.soI recommend the following steps to refresh everything:shell> rm ~/.julia/compiled/v1.0/Knet/*.ji\nshell> cd ~/.julia/packages/Knet/*/deps\nshell> make clean\nshell> julia\njulia> Pkg.build(\"Knet\")This refreshes all precompiled binaries and should typically solve the problem. If problems continue, you can get support from knet-users."
},

{
    "location": "install.html#Tips-for-developers-1",
    "page": "Setting up Knet",
    "title": "Tips for developers",
    "category": "section",
    "text": "Knet is an open-source project and we are always open to new contributions: bug fixes, new machine learning models and operators, inspiring examples, benchmarking results are all welcome. If you\'d like to contribute to the code base, please sign up at the knet-dev mailing list and follow these tips:Please get an account at github.com.\nFork the Knet   repository.\nPoint Julia to your fork using   Pkg.clone(\"git@github.com:your-username/Knet.jl.git\") and   Pkg.build(\"Knet\"). You may want to remove any old versions with   Pkg.rm(\"Knet\") first.\nMake sure your fork is   up-to-date.\nRetrieve the latest version of the master branch using   git pull in the Knet directory.\nImplement your contribution.  This typically involves:\nCreating a git branch.\nWriting your code.\nAdding documentation under doc/src and a summary in NEWS.md.\nAdding unit tests in the test directory and using Pkg.test(\"Knet\").\nPlease submit your contribution using a pull   request."
},

{
    "location": "install.html#Using-Amazon-AWS-1",
    "page": "Setting up Knet",
    "title": "Using Amazon AWS",
    "category": "section",
    "text": "If you don\'t have access to a GPU machine, but would like to experiment with one, Amazon Web Services is a possible solution. I have prepared a machine image (AMI) with everything you need to run Knet. Here are step by step instructions for launching a GPU instance with a Knet image (the screens may have changed slightly since this writing):1. First, you need to sign up and create an account following the instructions on Setting Up with Amazon EC2. Once you have an account, open the Amazon EC2 console and login. You should see the following screen:(Image: image)2. Make sure you select the \"Ohio\" region in the upper right corner, then click on AMIs on the lower left menu. At the search box, choose \"Public images\" and search for \"Knet\". Click on the latest Knet image (Knet-1.0.0 as of this writing). You should see the following screen with information about the Knet AMI. Click on the \"Launch\" button on the upper left.(Image: image)Note: Instead of \"Launch\", you may want to experiment with \"Spot Request\" under \"Actions\" to get a lower price. You may also qualify for an educational grant if you are a student or researcher.3. You should see the \"Step 2: Choose an Instance Type\" page. Pick one of the GPU instances (I have tested with the g2 series and the p2 series). Click on \"Review and Launch\".(Image: image)4. This should take you to the \"Step 7: Review Instance Launch\" page. You can just click \"Launch\" here:(Image: image)5. You should see the \"key pair\" pop up menu. In order to login to your instance, you need an ssh key pair. If you have created a pair during the initial setup you can use it with \"Choose an existing key pair\". Otherwise pick \"Create a new key pair\" from the pull down menu, enter a name for it, and click \"Download Key Pair\". Make sure you keep the downloaded file, we will use it to login. After making sure you have the key file (it has a .pem extension), click \"Launch Instances\" on the lower right.(Image: image)6. We have completed the request. You should see the \"Launch Status\" page. Click on your instance id under \"Your instances are launching\":(Image: image)7. You should be taken to the \"Instances\" screen and see the address of your instance where it says something like \"Public DNS: ec2-54-153-5-184.us-west-1.compute.amazonaws.com\".(Image: image)8.  Open up a terminal (or Putty if you are on Windows) and type:    ssh -i knetkey.pem ec2-user@ec2-54-153-5-184.us-west-1.compute.amazonaws.comReplacing knetkey.pem with the path to your key file and ec2-54-153-5-184 with the address of your machine. If all goes well you should get a shell prompt on your machine instance.9. There you can type julia, and at the julia prompt using Pkg, Pkg.update() and Pkg.build(\"Knet\") to get the latest versions of the packages, as the versions in the AMI may be out of date:[ec2-user@ip-172-31-24-60 deps]$ julia\n               _\n   _       _ _(_)_     |  Documentation: https://docs.julialang.org\n  (_)     | (_) (_)    |\n   _ _   _| |_  __ _   |  Type \"?\" for help, \"]?\" for Pkg help.\n  | | | | | | |/ _` |  |\n  | | |_| | | | (_| |  |  Version 1.0.0 (2018-08-08)\n _/ |\\__\'_|_|_|\\__\'_|  |  Official https://julialang.org/ release\n|__/                   |\n\njulia> using Pkg\njulia> Pkg.update()\njulia> Pkg.build(\"Knet\")Finally you can run Pkg.test(\"Knet\") to make sure all is good. This should take about 10-15 minutes. If all tests pass, you are ready to work with Knet:julia> Pkg.test(\"Knet\")\nINFO: Testing Knet\n...\nINFO: Knet tests passed\n\njulia>"
},

{
    "location": "tutorial.html#",
    "page": "Introduction to Knet",
    "title": "Introduction to Knet",
    "category": "page",
    "text": ""
},

{
    "location": "tutorial.html#Introduction-to-Knet-1",
    "page": "Introduction to Knet",
    "title": "Introduction to Knet",
    "category": "section",
    "text": "(Image: )  (Image: )  (Image: ) (Image: ) (Image: )Knet (pronounced \"kay-net\") is the Koç University deep learning framework implemented in Julia by Deniz Yuret and collaborators.  It supports GPU operation and automatic differentiation using dynamic computational graphs for models defined in plain Julia.  This document is a tutorial introduction to Knet.  Check out the full documentation and Examples for more information. If you need help or would like to request a feature, please consider joining the knet-users mailing list. If you find a bug, please open a GitHub issue. If you would like to contribute to Knet development, check out the knet-dev mailing list and Tips for developers. If you use Knet in academic work, here is a paper that can be cited:@inproceedings{knet2016mlsys,\n  author={Yuret, Deniz},\n  title={Knet: beginning deep learning with 100 lines of Julia},\n  year={2016},\n  booktitle={Machine Learning Systems Workshop at NIPS 2016}\n}ContentsPages = [\"tutorial.md\"]\nDepth = 5"
},

{
    "location": "tutorial.html#Philosophy-1",
    "page": "Introduction to Knet",
    "title": "Philosophy",
    "category": "section",
    "text": "Knet uses dynamic computational graphs generated at runtime for automatic differentiation of (almost) any Julia code.  This allows machine learning models to be implemented by defining just the forward calculation (i.e. the computation from parameters and data to loss) using the full power and expressivity of Julia. The implementation can use helper functions, loops, conditionals, recursion, closures, tuples and dictionaries, array indexing, concatenation and other high level language features, some of which are often missing in the restricted modeling languages of static computational graph systems like Theano, Torch, Caffe and Tensorflow.  GPU operation is supported by simply using the KnetArray type instead of regular Array for parameters and data.Knet builds a dynamic computational graph by recording primitive operations during forward calculation.  Only pointers to inputs and outputs are recorded for efficiency.  Therefore array overwriting is not supported during forward and backward passes.  This encourages a clean functional programming style.  High performance is achieved using custom memory management and efficient GPU kernels.  See Under the hood for more details."
},

{
    "location": "tutorial.html#Tutorial-1",
    "page": "Introduction to Knet",
    "title": "Tutorial",
    "category": "section",
    "text": "In Knet, a machine learning model is defined using plain Julia code. A typical model consists of a prediction and a loss function. The prediction function takes model parameters and some input, returns the prediction of the model for that input. The loss function measures how bad the prediction is with respect to some desired output. We train a model by adjusting its parameters to reduce the loss. In this section we will see the prediction, loss, and training functions for five models: linear regression, softmax classification, fully-connected, convolutional and recurrent neural networks.  It would be best to copy paste and modify these examples on your own computer.  They are also available as an IJulia notebook. You can install Knet using Pkg.add(\"Knet\") in Julia."
},

{
    "location": "tutorial.html#Linear-regression-1",
    "page": "Introduction to Knet",
    "title": "Linear regression",
    "category": "section",
    "text": "Here is the prediction function and the corresponding quadratic loss function for a simple linear regression model:using Knet\n\npredict(w,x) = w[1]*x .+ w[2]\n\nloss(w,x,y) = mean(abs2,y-predict(w,x))The variable w is a list of parameters (it could be a Tuple, Array, or Dict), x is the input and y is the desired output. To train this model, we want to adjust its parameters to reduce the loss on given training examples. The direction in the parameter space in which the loss reduction is maximum is given by the negative gradient of the loss. Knet uses the higher-order function grad from AutoGrad.jl to compute the gradient direction:lossgradient = grad(loss)Note that grad is a higher-order function that takes and returns other functions. The lossgradient function takes the same arguments as loss, e.g. dw = lossgradient(w,x,y). Instead of returning a loss value, lossgradient returns dw, the gradient of the loss with respect to its first argument w. The type and size of dw is identical to w, each entry in dw gives the derivative of the loss with respect to the corresponding entry in w.Given some training data = [(x1,y1),(x2,y2),...], here is how we can train this model:function train(w, data; lr=.1)\n    for (x,y) in data\n        dw = lossgradient(w, x, y)\n	for i in 1:length(w)\n	    w[i] -= lr * dw[i]\n	end	    \n    end\n    return w\nendWe simply iterate over the input-output pairs in data, calculate the lossgradient for each example, and move the parameters in the negative gradient direction with a step size determined by the learning rate lr.  (Image: image)Let\'s train this model on the Boston Housing dataset from the UCI Machine Learning Repository.include(Knet.dir(\"data\",\"housing.jl\"))\nx,y = housing()\nw = Any[ 0.1*randn(1,13), 0.0 ]\nfor i=1:10; train(w, [(x,y)]); println(loss(w,x,y)); end\n# 366.0463078055053\n# ...\n# 29.63709385230451The dataset has housing related information for 506 neighborhoods in Boston from 1978. Each neighborhood is represented using 13 attributes such as crime rate or distance to employment centers. The goal is to predict the median value of the houses given in $1000\'s. The housing() function from housing.jl downloads, splits and normalizes the data.  We initialize the parameters randomly and take 10 steps in the negative gradient direction. We can see the loss dropping from 366.0 to 29.6. See the housing example for more information on this model.Note that grad was the only function used that is not in the Julia standard library. This is typical of models defined in Knet, where most of the code is written in plain Julia."
},

{
    "location": "tutorial.html#Softmax-classification-1",
    "page": "Introduction to Knet",
    "title": "Softmax classification",
    "category": "section",
    "text": "In this example we build a simple classification model for the MNIST handwritten digit recognition dataset. MNIST has 60000 training and 10000 test examples. Each input x consists of 784 pixels representing a 28x28 image. The corresponding output indicates the identity of the digit 0..9.(Image: image)(image source)Classification models handle discrete outputs, as opposed to regression models which handle numeric outputs. We typically use the cross entropy loss function in classification models:predict(w,x) = w[1]*mat(x) .+ w[2]\n\nloss(w,x,ygold) = nll(predict(w,x), ygold)\n\nlossgradient = grad(loss)nll computes the negative log likelihood of your predictions compared to the correct answers.  Here, we assume ygold is an array of N integers indicating the correct answers for N instances (we use ygold=10 to represent the 0 answer) and predict() gives us a (10,N) matrix of scores for each answer. mat is needed to convert the (28,28,1,N) x array to a (784,N) matrix so it can be used in matrix multiplication.  Other than the change of loss function, the softmax model is identical to the linear regression model. We use the same predict (except for mat reshaping), train and set lossgradient=grad(loss) as before.Now let\'s train a model on the MNIST data:include(Knet.dir(\"data\",\"mnist.jl\"))\nxtrn, ytrn, xtst, ytst = mnist()\ndtrn = minibatch(xtrn, ytrn, 100)\ndtst = minibatch(xtst, ytst, 100)\nw = Any[ 0.1f0*randn(Float32,10,784), zeros(Float32,10,1) ]\nprintln((:epoch, 0, :trn, accuracy(w,dtrn,predict), :tst, accuracy(w,dtst,predict)))\nfor epoch=1:10\n    train(w, dtrn; lr=0.5)\n    println((:epoch, epoch, :trn, accuracy(w,dtrn,predict), :tst, accuracy(w,dtst,predict)))\nend\n\n# (:epoch,0,:trn,0.11761667f0,:tst,0.121f0)\n# (:epoch,1,:trn,0.9005f0,:tst,0.9048f0)\n# ...\n# (:epoch,10,:trn,0.9196f0,:tst,0.9153f0)Calling mnist() from mnist.jl loads the MNIST data, downloading it from the internet if necessary, and provides a training set (xtrn,ytrn) and a test set (xtst,ytst). minibatch is used to rearrange the data into chunks of 100 instances. After randomly initializing the parameters we train for 10 epochs, printing out training and test set accuracy at every epoch. The final accuracy of about 92% is close to the limit of what we can achieve with this type of model. To improve further we must look beyond linear models."
},

{
    "location": "tutorial.html#Multi-layer-perceptron-1",
    "page": "Introduction to Knet",
    "title": "Multi-layer perceptron",
    "category": "section",
    "text": "A multi-layer perceptron, i.e. a fully connected feed-forward neural network, is basically a bunch of linear regression models stuck together with non-linearities in between.(Image: image)(image source)We can define a MLP by slightly modifying the predict function:function predict(w,x)\n    x = mat(x)\n    for i=1:2:length(w)-2\n        x = relu.(w[i]*x .+ w[i+1])\n    end\n    return w[end-1]*x .+ w[end]\nendHere w[2k-1] is the weight matrix and w[2k] is the bias vector for the k\'th layer. relu implements the popular rectifier non-linearity: relu.(x) = max.(0,x).  Note that if w only has two entries, this is equivalent to the linear and softmax models. By adding more entries to w, we can define multi-layer perceptrons of arbitrary depth. Let\'s define one with a single hidden layer of 64 units:w = Any[ 0.1f0*randn(Float32,64,784), zeros(Float32,64,1),\n         0.1f0*randn(Float32,10,64),  zeros(Float32,10,1) ]The rest of the code is the same as the softmax model. We can use the same cross-entropy loss function and the same training script. However, we will use a different train function to introduce alternative optimizers:function train(model, data, optim)\n    for (x,y) in data\n        grads = lossgradient(model,x,y)\n        update!(model, grads, optim)\n    end\nendHere the optim argument specifies the optimization algorithm and state for each model parameter (see Optimization methods for available algorithms).  update! uses optim to update each model parameter and optimization state.  optim has the same size and shape as model, i.e. we have a separate optimizer for each model parameter. For simplicity we will use the optimizers function to create an Adam optimizer for each parameter:o = optimizers(w, Adam)\nprintln((:epoch, 0, :trn, accuracy(w,dtrn,predict), :tst, accuracy(w,dtst,predict)))\nfor epoch=1:10\n    train(w, dtrn, o)\n    println((:epoch, epoch, :trn, accuracy(w,dtrn,predict), :tst, accuracy(w,dtst,predict)))\nendThe code for this example is available in the mnist-mlp example or the knet-tutorial notebook.  The multi-layer perceptron does significantly better than the softmax model:(:epoch,0,:trn,0.10166667f0,:tst,0.0977f0)\n(:epoch,1,:trn,0.9389167f0,:tst,0.9407f0)\n...\n(:epoch,10,:trn,0.9866f0,:tst,0.9735f0)"
},

{
    "location": "tutorial.html#Convolutional-neural-network-1",
    "page": "Introduction to Knet",
    "title": "Convolutional neural network",
    "category": "section",
    "text": "To improve the performance further, we can use a convolutional neural networks (CNN). See the course notes by Andrej Karpathy for a good introduction to CNNs. We will implement the LeNet model which consists of two convolutional layers followed by two fully connected layers.(Image: image)(image source)Knet provides the conv4 and pool functions for the implementation of convolutional nets:function predict(w,x0)\n    x1 = pool(relu.(conv4(w[1],x0) .+ w[2]))\n    x2 = pool(relu.(conv4(w[3],x1) .+ w[4]))\n    x3 = relu.(w[5]*mat(x2) .+ w[6])\n    return w[7]*x3 .+ w[8]\nendThe weights for the convolutional net can be initialized as follows. w = Any[ xavier(Float32,5,5,1,20),  zeros(Float32,1,1,20,1),\n         xavier(Float32,5,5,20,50), zeros(Float32,1,1,50,1),\n         xavier(Float32,500,800),   zeros(Float32,500,1),\n         xavier(Float32,10,500),    zeros(Float32,10,1) ]Here we used xavier instead of randn which initializes weights based on their input and output widths.  This model is larger and more expensive to train compared to the previous models we have seen and it would be nice to use our GPU. To perform the operations on the GPU, all we need to do is to convert our data and weights to KnetArrays. minibatch takes an extra keyword argument xtype for this purpose, and we do it manually for the w weights:dtrn = minibatch(xtrn,ytrn,100,xtype=KnetArray)\ndtst = minibatch(xtst,ytst,100,xtype=KnetArray)\nw = map(KnetArray, w)The training proceeds as before giving us even better results. The code for the LeNet example can be found under the examples directory.(:epoch, 0, :trn, 0.10435, :tst, 0.103)\n(:epoch, 1, :trn, 0.98385, :tst, 0.9836)\n...\n(:epoch, 10, :trn, 0.9955166666666667, :tst, 0.9902)"
},

{
    "location": "tutorial.html#Recurrent-neural-network-1",
    "page": "Introduction to Knet",
    "title": "Recurrent neural network",
    "category": "section",
    "text": "In this section we will see how to implement a recurrent neural network (RNN) in Knet. This example, like the last one, requires a GPU.  An RNN is a class of neural network where connections between units form a directed cycle, which allows them to keep a persistent state over time. This gives them the ability to process sequences of arbitrary length one element at a time, while keeping track of what happened at previous elements.(Image: image)(image source)As an example, we will build a character-level language model inspired by \"The Unreasonable Effectiveness of Recurrent Neural Networks\" from the Andrej Karpathy blog. The model can be trained with different genres of text, and can be used to generate original text in the same style.We will use The Complete Works of William Shakespeare to train our model. The shakespeare() function defined in gutenberg.jl downloads the book and splits the data into 5M chars for training and 0.5M chars for testing.include(Knet.dir(\"data\",\"gutenberg.jl\"))\ntrn,tst,chars = shakespeare()\nmap(summary,(trn,tst,chars))\n# (\"4925284-element Array{UInt8,1}\", \"525665-element Array{UInt8,1}\", \"84-element Array{Char,1}\")There are 84 unique characters in the data and they are mapped to UInt8 values in 1:84. The chars array can be used to recover the original text:julia> println(string(chars[trn[1020:1210]]...))\n\nCheated of feature by dissembling nature,\nDeform\'d, unfinish\'d, sent before my time\nInto this breathing world scarce half made up,\nAnd that so lamely and unfashionableWe minibatch the data into (256,100) blocks:BATCHSIZE = 256  # number of sequences per minibatch\nSEQLENGTH = 100  # sequence length for bptt\n\nfunction mb(a)\n    N = div(length(a),BATCHSIZE)\n    x = reshape(a[1:N*BATCHSIZE],N,BATCHSIZE)\' # reshape full data to (B,N) with contiguous rows\n    minibatch(x[:,1:N-1], x[:,2:N], SEQLENGTH) # split into (B,T) blocks \nend\n\ndtrn,dtst = mb(trn),mb(tst)\nmap(length, (dtrn,dtst))\n# (192, 20)The initmodel function below initializes the weights for an RNN language model.  It returns a tuple where r,w are the RNN spec and weights, wx is the input embedding matrix, wy,by are the weight matrix and bias to produce the output from the hidden state. See rnninit for a full description of available options.RNNTYPE = :lstm  # can be :lstm, :gru, :tanh, :relu\nNUMLAYERS = 1    # number of RNN layers\nINPUTSIZE = 168  # size of the input character embedding\nHIDDENSIZE = 334 # size of the hidden layers\nVOCABSIZE = 84   # number of unique characters in data\n\nfunction initmodel()\n    w(d...)=KnetArray(xavier(Float32,d...))\n    b(d...)=KnetArray(zeros(Float32,d...))\n    r,wr = rnninit(INPUTSIZE,HIDDENSIZE,rnnType=RNNTYPE,numLayers=NUMLAYERS)\n    wx = w(INPUTSIZE,VOCABSIZE)\n    wy = w(VOCABSIZE,HIDDENSIZE)\n    by = b(VOCABSIZE,1)\n    return r,wr,wx,wy,by\nendA character based language model needs to predict the next character in a piece of text given the current character and recent history as encoded in the internal state of the RNN. Note that LSTMs have two state variables typically called hidden and cell.  The predict function below takes weights ws, inputs xs, the initial hidden and cell states hx and cx and returns output scores ys along with the final hidden and cell states hy and cy. See rnnforw for available options and the exact computations performed.function predict(ws,xs,hx,cx)\n    r,wr,wx,wy,by = ws\n    x = wx[:,xs]                                         # xs=(B,T) x=(X,B,T)\n    y,hy,cy = rnnforw(r,wr,x,hx,cx,hy=true,cy=true)      # y=(H,B,T) hy=cy=(H,B,L)\n    ys = by.+wy*reshape(y,size(y,1),size(y,2)*size(y,3)) # ys=(H,B*T)\n    return ys, hy, cy\nendThe loss function returns the negative-log-likelihood from the predicted scores and updates the hidden and cell states h in-place. getval is necessary to prevent AutoGrad state leaking from one minibatch to the next. We use gradloss instead of grad so that lossgradient returns both the gradient and the loss for reporting.function loss(w,x,y,h)\n    py,hy,cy = predict(w,x,h...)\n    h[1],h[2] = getval(hy),getval(cy)\n    return nll(py,y)\nend\n\nlossgradient = gradloss(loss)Here is the train and test loops.  When hidden and cell values are set to nothing, rnnforw assumes zero vectors.function train(model,data,optim)\n    hiddens = Any[nothing,nothing]\n    losses = []\n    for (x,y) in data\n        grads,loss1 = lossgradient(model,x,y,hiddens)\n        update!(model, grads, optim)\n	push!(losses, loss1)\n    end\n    return mean(losses)\nend\n\nfunction test(model,data)\n    hiddens = Any[nothing,nothing]\n    losses = []\n    for (x,y) in data\n        push!(losses, loss(model,x,y,hiddens))\n    end\n    return mean(losses)\nendWe are ready to initialize and train our model. We report train and test perplexity after every epoch. 30 epochs take less than 10 minutes with a K80 GPU:EPOCHS = 30\nmodel = initmodel()\noptim = optimizers(model, Adam)\n@time for epoch in 1:EPOCHS\n    @time trnloss = train(model,dtrn,optim) # ~18 seconds\n    @time tstloss = test(model,dtst)        # ~0.5 seconds\n    println((:epoch, epoch, :trnppl, exp(trnloss), :tstppl, exp(tstloss)))\nend\n\n# 17.228594 seconds (243.32 k allocations: 131.754 MiB, 0.05% gc time)\n#  0.713869 seconds (208.56 k allocations: 19.673 MiB, 0.50% gc time)\n# (:epoch, 1, :trnppl, 13.917706f0, :tstppl, 7.7539396f0)\n# ...\n# (:epoch, 30, :trnppl, 3.0681787f0, :tstppl, 3.350249f0)\n# 533.660206 seconds (7.69 M allocations: 4.132 GiB, 0.03% gc time)To generate text we sample each character randomly using the probabilities predicted by the model based on the previous character. The helper function sample takes unnormalized scores y and samples an index based on normalized probabilities based on y. The first character is initialized to newline and n characters are sampled based on the model.function generate(model,n)\n    function sample(y)\n        p,r=Array(exp.(y-logsumexp(y))),rand()\n        for j=1:length(p); (r -= p[j]) < 0 && return j; end\n    end\n    h,c = nothing,nothing\n    x = findfirst(chars,\'\\n\')\n    for i=1:n\n        y,h,c = predict(model,[x],h,c)\n        x = sample(y)\n        print(chars[x])\n    end\n    println()\nend\n\ngenerate(model,1000)Here is a random sample of 1000 characters from the model.  Note that the model has learnt to generate person names, correct indentation and mostly English words only by reading Shakespeare one letter at a time! The code for this example is available in the charlm notebook.    Pand soping them, my lord, if such a foolish?\n  MARTER. My lord, and nothing in England\'s ground to new comp\'d.\n    To bless your view of wot their dullst. If Doth no ape;\n    Which with the heart. Rome father stuff\n    These shall sweet Mary against a sudden him\n    Upon up th\' night is a wits not that honour,\n    Shouts have sure?\n  MACBETH. Hark? And, Halcance doth never memory I be thou what\n    My enties mights in Tim thou?\n  PIESTO. Which it time\'s purpose mine hortful and\n    is my Lord.\n  BOTTOM. My lord, good mine eyest, then: I will not set up.\n  LUCILIUS. Who shall"
},

{
    "location": "tutorial.html#Benchmarks-1",
    "page": "Introduction to Knet",
    "title": "Benchmarks",
    "category": "section",
    "text": ""
},

{
    "location": "tutorial.html#Knet-Benchmarks-(Sep-30,-2016)-1",
    "page": "Introduction to Knet",
    "title": "Knet Benchmarks (Sep 30, 2016)",
    "category": "section",
    "text": "Each of the examples above was used as a benchmark to compare Knet with other frameworks. The table below shows the number of seconds it takes to train a given model for a particular dataset, number of epochs and minibatch size for Knet, Theano, Torch, Caffe and TensorFlow. Knet had comparable performance to other commonly used frameworks.model dataset epochs batch Knet Theano Torch Caffe TFlow\nLinReg Housing 10K 506 2.84 1.88 2.66 2.35 5.92\nSoftmax MNIST 10 100 2.35 1.40 2.88 2.45 5.57\nMLP MNIST 10 100 3.68 2.31 4.03 3.69 6.94\nLeNet MNIST 1 100 3.59 3.03 1.69 3.54 8.77\nCharLM Hiawatha 1 128 2.25 2.42 2.23 1.43 2.86The benchmarking was done on g2.2xlarge GPU instances on Amazon AWS. The code is available at github and as machine image deep_AMI_v6 at AWS N.California. See the section on Using Amazon AWS for more information. The datasets are available online using the following links: Housing, MNIST, Hiawatha. The MLP uses a single hidden layer of 64 units. CharLM uses a single layer LSTM language model with embedding and hidden layer sizes set to 256 and trained using BPTT with a sequence length of 100. Each dataset was minibatched and transferred to GPU prior to benchmarking when possible."
},

{
    "location": "tutorial.html#DyNet-Benchmarks-(Dec-15,-2017)-1",
    "page": "Introduction to Knet",
    "title": "DyNet Benchmarks (Dec 15, 2017)",
    "category": "section",
    "text": "We implemented dynamic neural network examples from the dynet-benchmark repo to compare Knet with DyNet and Chainer. See DyNet technical report for the architectural details of the implemented examples and the github repo for the source code.rnnlm-batch: A recurrent neural network language model on PTB corpus.\nbilstm-tagger: A bidirectional LSTM network that predicts a tag for each word. It is trained on WikiNER dataset.\nbilstm-tagger-withchar: Similar to bilstm-tagger, but uses characer-based embeddings for unknown words.\ntreenn: A tree-structured LSTM sentiment classifier trained on Stanford Sentiment Treebank dataset.Benchmarks were run on a server with Intel(R) Xeon(R) CPU E5-2695 v4 @ 2.10GHz and Tesla K80.Model Metric Knet DyNet Chainer\nrnnlm-batch words/sec 28.5k 18.7k 16k\nbilstm-tagger words/sec 6800 1200 157\nbilstm-tagger-withchar words/sec 1300 900 128\ntreenn sents/sec 43 68 10"
},

{
    "location": "tutorial.html#DeepLearningFrameworks-(Nov-24,-2017)-1",
    "page": "Introduction to Knet",
    "title": "DeepLearningFrameworks (Nov 24, 2017)",
    "category": "section",
    "text": "More recently, @ilkarman has published CNN and RNN benchmarks on Nvidia K80 GPUs, using the Microsoft Azure Data Science Virtual Machine for Linux (Ubuntu). The results are copied below.  You can find versions of the Knet notebooks used for these benchmarks in the Knet/examples/DeepLearningFrameworks directory.Training CNN (VGG-style) on CIFAR-10 - Image RecognitionDL Library Test Accuracy (%) Training Time (s)\nMXNet 77 145\nCaffe2 79 148\nGluon 76 152\nKnet(Julia) 78 159\nChainer 79 162\nCNTK 78 163\nPyTorch 78 169\nTensorflow 78 173\nKeras(CNTK) 77 194\nKeras(TF) 77 241\nLasagne(Theano) 77 253\nKeras(Theano) 78 269Training RNN (GRU) on IMDB - Natural Language Processing (Sentiment Analysis)DL Library Test Accuracy (%) Training Time (s) Using CuDNN?\nMXNet 86 29 Yes\nKnet(Julia) 85 29 Yes\nTensorflow 86 30 Yes\nPytorch 86 31 Yes\nCNTK 85 32 Yes\nKeras(TF) 86 35 Yes\nKeras(CNTK) 86 86 N/AInference ResNet-50 (Feature Extraction)DL Library Images/s GPU Images/s CPU\nKnet(Julia) 160 2\nTensorflow 155 11\nPyTorch 130 6\nMXNet 130 8\nMXNet(w/mkl) 129 25\nCNTK 117 8\nChainer 107 3\nKeras(TF) 98 5\nCaffe2 71 6\nKeras(CNTK) 46 4"
},

{
    "location": "tutorial.html#Under-the-hood-1",
    "page": "Introduction to Knet",
    "title": "Under the hood",
    "category": "section",
    "text": "Knet relies on the AutoGrad package and the KnetArray data type for its functionality and performance. AutoGrad computes the gradient of Julia functions and KnetArray implements high performance GPU arrays with custom memory management. This section briefly describes them."
},

{
    "location": "tutorial.html#KnetArrays-1",
    "page": "Introduction to Knet",
    "title": "KnetArrays",
    "category": "section",
    "text": "GPUs have become indispensable for training large deep learning models. Even the small examples implemented here run up to 17x faster on the GPU compared to the 8 core CPU architecture we use for benchmarking. However GPU implementations have a few potential pitfalls: (i) GPU memory allocation is slow, (ii) GPU-RAM memory transfer is slow, (iii) reduction operations (like sum) can be very slow unless implemented properly (See Optimizing Parallel Reduction in CUDA).Knet implements KnetArray as a Julia data type that wraps GPU array pointers. KnetArray is based on the more standard CudaArray with a few important differences: (i) KnetArrays have a custom memory manager, similar to ArrayFire, which reuse pointers garbage collected by Julia to reduce the number of GPU memory allocations, (ii) contiguous array ranges (e.g. a[:,3:5]) are handled as views with shared pointers instead of copies when possible, and (iii) a number of custom CUDA kernels written for KnetArrays implement element-wise, broadcasting, and scalar and vector reduction operations efficiently. As a result Knet allows users to implement their models using high-level code, yet be competitive in performance with other frameworks as demonstrated in the benchmarks section."
},

{
    "location": "tutorial.html#AutoGrad-1",
    "page": "Introduction to Knet",
    "title": "AutoGrad",
    "category": "section",
    "text": "As we have seen, many common machine learning models can be expressed as differentiable programs that input parameters and data and output a scalar loss value. The loss value measures how close the model predictions are to desired values with the given parameters. Training a model can then be seen as an optimization problem: find the parameters that minimize the loss. Typically, a gradient based optimization algorithm is used for computational efficiency: the direction in the parameter space in which the loss reduction is maximum is given by the negative gradient of the loss with respect to the parameters. Thus gradient computations take a central stage in software frameworks for machine learning. In this section I will briefly outline existing gradient computation techniques and motivate the particular approach taken by Knet.Computation of gradients in computer models is performed by four main methods (Baydin et al. 2015):manual differentiation (programming the derivatives)\nnumerical differentiation (using finite difference approximations)\nsymbolic differentiation (using expression manipulation)\nautomatic differentiation (detailed below)Manually taking derivatives and coding the result is labor intensive, error-prone, and all but impossible with complex deep learning models. Numerical differentiation is simple: f(x)=(f(x+epsilon)-f(x-epsilon))(2epsilon) but impractical: the finite difference equation needs to be evaluated for each individual parameter, of which there are typically many. Pure symbolic differentiation using expression manipulation, as implemented in software such as Maxima, Maple, and Mathematica is impractical for different reasons: (i) it may not be feasible to express a machine learning model as a closed form mathematical expression, and (ii) the symbolic derivative can be exponentially larger than the model itself leading to inefficient run-time calculation. This leaves us with automatic differentiation.Automatic differentiation is the idea of using symbolic derivatives only at the level of elementary operations, and computing the gradient of a compound function by applying the chain rule to intermediate numerical results. For example, pure symbolic differentiation of sin^2(x) could give us 2sin(x)cos(x) directly. Automatic differentiation would use the intermediate numerical values x_1=sin(x), x_2=x_1^2 and the elementary derivatives dx_2dx_1=2x_1, dx_1dx=cos(x) to compute the same answer without ever building a full gradient expression.To implement automatic differentiation the target function needs to be decomposed into its elementary operations, a process similar to compilation. Most machine learning frameworks (such as Theano, Torch, Caffe, Tensorflow and older versions of Knet prior to v0.8) compile models expressed in a restricted mini-language into a static computational graph of elementary operations that have pre-defined derivatives. There are two drawbacks with this approach: (i) the restricted mini-languages tend to have limited support for high-level language features such as conditionals, loops, helper functions, array indexing, etc. (e.g. the infamous scan operation in Theano) (ii) the sequence of elementary operations that unfold at run-time needs to be known in advance, and they are difficult to handle when the sequence is data dependent.There is an alternative: high-level languages, like Julia and Python, already know how to decompose functions into their elementary operations. If we let the users define their models directly in a high-level language, then record the elementary operations during loss calculation at run-time, a dynamic computational graph can be constructed from the recorded operations. The cost of recording is not prohibitive: The table below gives cumulative times for elementary operations of an MLP with quadratic loss. Recording only adds 15% to the raw cost of the forward computation. Backpropagation roughly doubles the total time as expected.op secs\na1=w1*x 0.67\na2=w2.+a1 0.71\na3=max.(0,a2) 0.75\na4=w3*a3 0.81\na5=w4.+a4 0.85\na6=a5-y 0.89\na7=sum(abs2,a6) 1.18\n+recording 1.33\n+backprop 2.79This is the approach taken by the popular autograd Python package and its Julia port AutoGrad.jl used by Knet. Recently, other machine learning frameworks have been adapting dynamic computational graphs: Chainer, DyNet, PyTorch, TensorFlow Fold.In Knet g=grad(f) generates a gradient function g, which takes the same inputs as the function f but returns the gradient. The gradient function g triggers recording by boxing the parameters in a special data type and calls f. The elementary operations in f are overloaded to record their actions and output boxed answers when their inputs are boxed. The sequence of recorded operations is then used to compute gradients. In the Julia AutoGrad package, derivatives can be defined independently for each method of a function (determined by argument types) making full use of Julia\'s multiple dispatch. New elementary operations and derivatives can be defined concisely using Julia\'s macro and meta-programming facilities. See AutoGrad.jl for details."
},

{
    "location": "tutorial.html#Contributing-1",
    "page": "Introduction to Knet",
    "title": "Contributing",
    "category": "section",
    "text": "Knet is an open-source project and we are always open to new contributions: bug reports and fixes, feature requests and contributions, new machine learning models and operators, inspiring examples, benchmarking results are all welcome. If you would like to contribute to Knet development, check out the knet-dev mailing list and Tips for developers.Current contributors:Deniz Yuret\nCan Gümeli\nCarlo Lucibello\nEkin Akyürek\nEkrem Emre Yurdakul\nEmre Yolcu\nEmre Ünal\nEnis Berk\nErenay Dayanık\nMeriç Melike Softa\nOnur Kuru\nOzan Arkan Can\nÖmer Kırnap\nİlker Kesen\n张实唯 (@ylxdzsw)"
},

{
    "location": "reference.html#",
    "page": "Reference",
    "title": "Reference",
    "category": "page",
    "text": ""
},

{
    "location": "reference.html#Reference-1",
    "page": "Reference",
    "title": "Reference",
    "category": "section",
    "text": "ContentsPages = [\"reference.md\"]"
},

{
    "location": "reference.html#AutoGrad.grad",
    "page": "Reference",
    "title": "AutoGrad.grad",
    "category": "function",
    "text": "Usage:\n\nx = Param([1,2,3])          # user declares parameters\nx => P([1,2,3])             # they are wrapped in a struct\nvalue(x) => [1,2,3]         # we can get the original value\nsum(abs2,x) => 14           # they act like regular values outside of differentiation\ny = @diff sum(abs2,x)       # if you want the gradients\ny => T(14)                  # you get another struct\nvalue(y) => 14              # which represents the same value\ngrad(y,x) => [2,4,6]        # but also contains gradients for all Params\n\nParam(x) returns a struct that acts like x but marks it as a parameter you want to compute gradients with respect to.\n\n@diff expr evaluates an expression and returns a struct that contains its value (which should be a scalar) and gradient information.\n\ngrad(y, x) returns the gradient of y (output by @diff) with respect to any parameter x::Param, or  nothing if the gradient is 0.\n\nvalue(x) returns the value associated with x if x is a Param or the output of @diff, otherwise returns x.\n\nparams(x) returns an array of Params found by a recursive search of object x.\n\nAlternative usage:\n\nx = [1 2 3]\nf(x) = sum(abs2, x)\nf(x) => 14\ngrad(f)(x) => [2 4 6]\ngradloss(f)(x) => ([2 4 6], 14)\n\nGiven a scalar valued function f, grad(f,argnum=1) returns another function g which takes the same inputs as f and returns the gradient of the output with respect to the argnum\'th argument. gradloss is similar except the resulting function also returns f\'s output.\n\n\n\n\n\n"
},

{
    "location": "reference.html#AutoGrad.gradloss",
    "page": "Reference",
    "title": "AutoGrad.gradloss",
    "category": "function",
    "text": "Usage:\n\nx = Param([1,2,3])          # user declares parameters\nx => P([1,2,3])             # they are wrapped in a struct\nvalue(x) => [1,2,3]         # we can get the original value\nsum(abs2,x) => 14           # they act like regular values outside of differentiation\ny = @diff sum(abs2,x)       # if you want the gradients\ny => T(14)                  # you get another struct\nvalue(y) => 14              # which represents the same value\ngrad(y,x) => [2,4,6]        # but also contains gradients for all Params\n\nParam(x) returns a struct that acts like x but marks it as a parameter you want to compute gradients with respect to.\n\n@diff expr evaluates an expression and returns a struct that contains its value (which should be a scalar) and gradient information.\n\ngrad(y, x) returns the gradient of y (output by @diff) with respect to any parameter x::Param, or  nothing if the gradient is 0.\n\nvalue(x) returns the value associated with x if x is a Param or the output of @diff, otherwise returns x.\n\nparams(x) returns an array of Params found by a recursive search of object x.\n\nAlternative usage:\n\nx = [1 2 3]\nf(x) = sum(abs2, x)\nf(x) => 14\ngrad(f)(x) => [2 4 6]\ngradloss(f)(x) => ([2 4 6], 14)\n\nGiven a scalar valued function f, grad(f,argnum=1) returns another function g which takes the same inputs as f and returns the gradient of the output with respect to the argnum\'th argument. gradloss is similar except the resulting function also returns f\'s output.\n\n\n\n\n\n"
},

{
    "location": "reference.html#AutoGrad.gradcheck",
    "page": "Reference",
    "title": "AutoGrad.gradcheck",
    "category": "function",
    "text": "gradcheck(f, x...; kwargs...)\n\nNumerically check the gradient of f(x...) and return a boolean result.\n\nEach argument can be a Number, Array, Tuple or Dict which in turn can contain other Arrays etc.  Only 10 random entries in each large numeric array are checked by default.  If the output of f is not a number, we check the gradient of sum(f(x...)).\n\nKeywords\n\nargs=:: the argument indices to check gradients with respect to. Could be an array or range of indices or a single index. By default all arguments that have a length method are checked.\nkw=(): keyword arguments to be passed to f.\nnsample=10: number of random entries from each numeric array in gradient dw=(grad(f))(w,x...;o...) compared to their numerical estimates.\natol=rtol=0.01: tolerance parameters.  See isapprox for their meaning.\ndelta=0.0001: step size for numerical gradient calculation.\nverbose=1: 0 prints nothing, 1 shows failing tests, 2 shows all tests.\n\n\n\n\n\n"
},

{
    "location": "reference.html#AutoGrad-1",
    "page": "Reference",
    "title": "AutoGrad",
    "category": "section",
    "text": "AutoGrad.grad\nAutoGrad.gradloss\nAutoGrad.gradcheck"
},

{
    "location": "reference.html#Knet.KnetArray",
    "page": "Reference",
    "title": "Knet.KnetArray",
    "category": "type",
    "text": "KnetArray{T}(undef,dims)\nKnetArray(a::AbstractArray)\nArray(k::KnetArray)\n\nContainer for GPU arrays that supports most of the AbstractArray interface.  The constructor allocates a KnetArray in the currently active device, as specified by gpu().  KnetArrays and Arrays can be converted to each other as shown above, which involves copying to and from the GPU memory.  Only Float32/64 KnetArrays are fully supported.\n\nImportant differences from the alternative CudaArray are: (1) a custom memory manager that minimizes the number of calls to the slow cudaMalloc by reusing already allocated but garbage collected GPU pointers.  (2) a custom getindex that handles ranges such as a[5:10] as views with shared memory instead of copies.  (3) custom CUDA kernels that implement elementwise, broadcasting, and reduction operations.\n\nSupported functions:\n\nIndexing: getindex, setindex! with the following index types:\n1-D: Real, Colon, OrdinalRange, AbstractArray{Real}, AbstractArray{Bool}, CartesianIndex, AbstractArray{CartesianIndex}, EmptyArray, KnetArray{Int32} (low level), KnetArray{0/1} (using float for BitArray) (1-D includes linear indexing of multidimensional arrays)\n2-D: (Colon,Union{Real,Colon,OrdinalRange,AbstractVector{Real},AbstractVector{Bool},KnetVector{Int32}}), (Union{Real,AbstractUnitRange,Colon}...) (in any order)\nN-D: (Real...)\nArray operations: ==, !=, cat, convert, copy, copyto!, deepcopy, display, eachindex, eltype, endof, fill!, first, hcat, isapprox, isempty, length, ndims, one, ones, pointer, rand!, randn!, reshape, similar, size, stride, strides, summary, vcat, vec, zero. (cat(x,y,dims=i) supported for i=1,2.)\nMath operators: (-), abs, abs2, acos, acosh, asin, asinh, atan, atanh, cbrt, ceil, cos, cosh, cospi, erf, erfc, erfcinv, erfcx, erfinv, exp, exp10, exp2, expm1, floor, log, log10, log1p, log2, round, sign, sin, sinh, sinpi, sqrt, tan, tanh, trunc\nBroadcasting operators: (.*), (.+), (.-), (./), (.<), (.<=), (.!=), (.==), (.>), (.>=), (.^), max, min.  (Boolean operators generate outputs with same type as inputs; no support for KnetArray{Bool}.)\nReduction operators: countnz, maximum, mean, minimum, prod, sum, sumabs, sumabs2, norm.\nLinear algebra: (*), axpy!, permutedims (up to 5D), transpose\nKnet extras: relu, sigm, invx, logp, logsumexp, conv4, pool, deconv4, unpool, mat, update! (Only 4D/5D, Float32/64 KnetArrays support conv4, pool, deconv4, unpool)\n\nMemory management\n\nKnet models do not overwrite arrays which need to be preserved for gradient calculation.  This leads to a lot of allocation and regular GPU memory allocation is prohibitively slow. Fortunately most models use identically sized arrays over and over again, so we can minimize the number of actual allocations by reusing preallocated but garbage collected pointers.\n\nWhen Julia gc reclaims a KnetArray, a special finalizer keeps its pointer in a table instead of releasing the memory.  If an array with the same size in bytes is later requested, the same pointer is reused. The exact algorithm for allocation is:\n\nTry to find a previously allocated and garbage collected pointer in the current device. (0.5 μs)\nIf not available, try to allocate a new array using cudaMalloc. (10 μs)\nIf not successful, try running gc() and see if we get a pointer of the right size. (75 ms, but this should be amortized over all reusable pointers that become available due to the gc)\nFinally if all else fails, clean up all saved pointers in the current device using cudaFree and try allocation one last time. (25-70 ms, however this causes the elimination of all reusable pointers)\n\n\n\n\n\n"
},

{
    "location": "reference.html#KnetArray-1",
    "page": "Reference",
    "title": "KnetArray",
    "category": "section",
    "text": "Knet.KnetArray"
},

{
    "location": "reference.html#Knet.accuracy",
    "page": "Reference",
    "title": "Knet.accuracy",
    "category": "function",
    "text": "accuracy(scores, answers; dims=1, average=true)\n\nGiven an unnormalized scores matrix and an Integer array of correct answers, return the ratio of instances where the correct answer has the maximum score. dims=1 means instances are in columns, dims=2 means instances are in rows. Use average=false to return the number of correct answers instead of the ratio.\n\n\n\n\n\naccuracy(model, data; dims=1, average=true, o...)\n\nCompute accuracy(model(x; o...), y; dims) for (x,y) in data and return the ratio (if average=true) or the count (if average=false) of correct answers.\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.dir",
    "page": "Reference",
    "title": "Knet.dir",
    "category": "function",
    "text": "Knet.dir(path...)\n\nConstruct a path relative to Knet root.\n\nExample\n\njulia> Knet.dir(\"examples\",\"mnist.jl\")\n\"/home/dyuret/.julia/v0.5/Knet/examples/mnist.jl\"\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.dropout",
    "page": "Reference",
    "title": "Knet.dropout",
    "category": "function",
    "text": "dropout(x, p)\n\nGiven an array x and probability 0<=p<=1, just return x if p==0, or return an array y in which each element is 0 with probability p or x[i]/(1-p) with probability 1-p.  Use seed::Number to set the random number seed for reproducible results. See (Srivastava et al. 2014) for a reference.\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.gpu",
    "page": "Reference",
    "title": "Knet.gpu",
    "category": "function",
    "text": "gpu() returns the id of the active GPU device or -1 if none are active.\n\ngpu(true) resets all GPU devices and activates the one with the most available memory.\n\ngpu(false) resets and deactivates all GPU devices.\n\ngpu(d::Int) activates the GPU device d if 0 <= d < gpuCount(), otherwise deactivates devices.\n\ngpu(true/false) resets all devices.  If there are any allocated KnetArrays their pointers will be left dangling.  Thus gpu(true/false) should only be used during startup.  If you want to suspend GPU use temporarily, use gpu(-1).\n\ngpu(d::Int) does not reset the devices.  You can select a previous device and find allocated memory preserved.  However trying to operate on arrays of an inactive device will result in error.\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.invx",
    "page": "Reference",
    "title": "Knet.invx",
    "category": "function",
    "text": "invx(x) = (1./x)\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.gc",
    "page": "Reference",
    "title": "Knet.gc",
    "category": "function",
    "text": "Knet.gc(dev=gpu())\n\ncudaFree all pointers allocated on device dev that were previously allocated and garbage collected. Normally Knet holds on to all garbage collected pointers for reuse. Try this if you run out of GPU memory.\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.softmax",
    "page": "Reference",
    "title": "Knet.softmax",
    "category": "function",
    "text": "softmax(x; dims=1, algo=1)\n\nThe softmax function typically used in classification. Gives the same results as to exp.(logp(x, dims)). \n\nIf algo=1 computation is more accurate, if algo=0 it is  faster. \n\nSee also logsoftmax.\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.logp",
    "page": "Reference",
    "title": "Knet.logp",
    "category": "function",
    "text": "logp(x; dims=:)\n\nTreat entries in x as as unnormalized log probabilities and return normalized log probabilities.\n\ndims is an optional argument, if not specified the normalization is over the whole x, otherwise the normalization is performed over the given dimensions.  In particular, if x is a matrix, dims=1 normalizes columns of x and dims=2 normalizes rows of x.\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.logsoftmax",
    "page": "Reference",
    "title": "Knet.logsoftmax",
    "category": "function",
    "text": " logsoftmax(x; dims=:)\n\nEquivalent to logp(x; dims=:). See also sotfmax. \n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.logsumexp",
    "page": "Reference",
    "title": "Knet.logsumexp",
    "category": "function",
    "text": "logsumexp(x;dims=:)\n\nCompute log(sum(exp(x);dims)) in a numerically stable manner.\n\ndims is an optional argument, if not specified the summation is over the whole x, otherwise the summation is performed over the given dimensions.  In particular if x is a matrix, dims=1 sums columns of x and dims=2 sums rows of x.\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.logistic",
    "page": "Reference",
    "title": "Knet.logistic",
    "category": "function",
    "text": "logistic(scores, answers; average=true)\n\nComputes logistic loss given scores(predicted values) and answer labels. answer values should be {-1,1}, then it returns mean|sum(log(1 + exp(-answers*scores))). See also bce.\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.bce",
    "page": "Reference",
    "title": "Knet.bce",
    "category": "function",
    "text": "bce(scores,answers;average=true)\n\nComputes binary cross entropy given scores(predicted values) and answer labels. answer values should be {0,1}, then it returns negative of mean|sum(answers * log(p) + (1-answers)*log(1-p)) where p is equal to 1/(1 + exp.(scores)). See also logistic.\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.minibatch",
    "page": "Reference",
    "title": "Knet.minibatch",
    "category": "function",
    "text": "minibatch(x, [y], batchsize; shuffle, partial, xtype, ytype, xsize, ysize)\n\nReturn an iterable of minibatches [(xi,yi)...] given data tensors x, y and batchsize.  The last dimension of x and y should match and give the number of instances. y is optional.  Keyword arguments:\n\nshuffle=false: Shuffle the instances before minibatching.\npartial=false: If true include the last partial minibatch < batchsize.\nxtype=typeof(x): Convert xi in minibatches to this type.\nytype=typeof(y): Convert yi in minibatches to this type.\nxsize=size(x): Convert xi in minibatches to this shape.\nysize=size(y): Convert yi in minibatches to this shape.\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.nll",
    "page": "Reference",
    "title": "Knet.nll",
    "category": "function",
    "text": "nll(scores, answers; dims=1, average=true)\n\nGiven an unnormalized scores matrix and an Integer array of correct answers, return the per-instance negative log likelihood. dims=1 means instances are in columns, dims=2 means instances are in rows.  Use average=false to return the sum instead of per-instance average.\n\n\n\n\n\nnll(model, data; dims=1, average=true, o...)\n\nCompute nll(model(x; o...), y; dims) for (x,y) in data and return the per-instance average (if average=true) or total (if average=false) negative log likelihood.\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.relu",
    "page": "Reference",
    "title": "Knet.relu",
    "category": "function",
    "text": "relu(x)\n\nReturn max(0,x).\n\nReference: Rectified Linear Units Improve Restricted Boltzmann Machines (https://icml.cc/Conferences/2010/abstracts.html#432).\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.seed!",
    "page": "Reference",
    "title": "Knet.seed!",
    "category": "function",
    "text": "Knet.seed!(n::Integer)\n\nRun seed!(n) on both cpu and gpu.\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.sigm",
    "page": "Reference",
    "title": "Knet.sigm",
    "category": "function",
    "text": "sigm(x) = (1./(1+exp(-x)))\n\n\n\n\n\n"
},

{
    "location": "reference.html#Utilities-1",
    "page": "Reference",
    "title": "Utilities",
    "category": "section",
    "text": "Knet.accuracy\nKnet.dir\nKnet.dropout\nKnet.gpu\nKnet.invx\nKnet.gc\nKnet.softmax\nKnet.logp\nKnet.logsoftmax\nKnet.logsumexp\nKnet.logistic\nKnet.bce\nKnet.minibatch\nKnet.nll\nKnet.relu\nKnet.seed!\nKnet.sigm"
},

{
    "location": "reference.html#Knet.conv4",
    "page": "Reference",
    "title": "Knet.conv4",
    "category": "function",
    "text": "conv4(w, x; kwargs...)\n\nExecute convolutions or cross-correlations using filters specified with w over tensor x.\n\nCurrently KnetArray{Float32/64,4/5} and Array{Float32/64,4} are supported as w and x.  If w has dimensions (W1,W2,...,I,O) and x has dimensions (X1,X2,...,I,N), the result y will have dimensions (Y1,Y2,...,O,N) where\n\nYi=1+floor((Xi+2*padding[i]-Wi)/stride[i])\n\nHere I is the number of input channels, O is the number of output channels, N is the number of instances, and Wi,Xi,Yi are spatial dimensions.  padding and stride are keyword arguments that can be specified as a single number (in which case they apply to all dimensions), or an array/tuple with entries for each spatial dimension.\n\nKeywords\n\npadding=0: the number of extra zeros implicitly concatenated at the start and at the end of each dimension.\nstride=1: the number of elements to slide to reach the next filtering window.\nupscale=1: upscale factor for each dimension.\nmode=0: 0 for convolution and 1 for cross-correlation.\nalpha=1: can be used to scale the result.\nhandle: handle to a previously created cuDNN context. Defaults to a Knet allocated handle.\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.deconv4",
    "page": "Reference",
    "title": "Knet.deconv4",
    "category": "function",
    "text": "y = deconv4(w, x; kwargs...)\n\nSimulate 4-D deconvolution by using transposed convolution operation. Its forward pass is equivalent to backward pass of a convolution (gradients with respect to input tensor). Likewise, its backward pass (gradients with respect to input tensor) is equivalent to forward pass of a convolution. Since it swaps forward and backward passes of convolution operation, padding and stride options belong to output tensor. See this report for further explanation.\n\nCurrently KnetArray{Float32/64,4} and Array{Float32/64,4} are supported as w and x.  If w has dimensions (W1,W2,...,O,I) and x has dimensions (X1,X2,...,I,N), the result y will have dimensions (Y1,Y2,...,O,N) where\n\nYi = Wi+stride[i](Xi-1)-2padding[i]\n\nHere I is the number of input channels, O is the number of output channels, N is the number of instances, and Wi,Xi,Yi are spatial dimensions. padding and stride are keyword arguments that can be specified as a single number (in which case they apply to all dimensions), or an array/tuple with entries for each spatial dimension.\n\nKeywords\n\npadding=0: the number of extra zeros implicitly concatenated at the start and at the end of each dimension.\nstride=1: the number of elements to slide to reach the next filtering window.\nmode=0: 0 for convolution and 1 for cross-correlation.\nalpha=1: can be used to scale the result.\nhandle: handle to a previously created cuDNN context. Defaults to a Knet allocated handle.\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.mat",
    "page": "Reference",
    "title": "Knet.mat",
    "category": "function",
    "text": "mat(x)\n\nReshape x into a two-dimensional matrix.\n\nThis is typically used when turning the output of a 4-D convolution result into a 2-D input for a fully connected layer.  For 1-D inputs returns reshape(x, (length(x),1)).  For inputs with more than two dimensions of size (X1,X2,...,XD), returns\n\nreshape(x, (X1*X2*...*X[D-1],XD))\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.pool",
    "page": "Reference",
    "title": "Knet.pool",
    "category": "function",
    "text": "pool(x; kwargs...)\n\nCompute pooling of input values (i.e., the maximum or average of several adjacent values) to produce an output with smaller height and/or width.\n\nCurrently 4 or 5 dimensional KnetArrays with Float32 or Float64 entries are supported.  If x has dimensions (X1,X2,...,I,N), the result y will have dimensions (Y1,Y2,...,I,N) where\n\nYi=1+floor((Xi+2*padding[i]-window[i])/stride[i])\n\nHere I is the number of input channels, N is the number of instances, and Xi,Yi are spatial dimensions.  window, padding and stride are keyword arguments that can be specified as a single number (in which case they apply to all dimensions), or an array/tuple with entries for each spatial dimension.\n\nKeywords:\n\nwindow=2: the pooling window size for each dimension.\npadding=0: the number of extra zeros implicitly concatenated at the start and at the end of each dimension.\nstride=window: the number of elements to slide to reach the next pooling window.\nmode=0: 0 for max, 1 for average including padded values, 2 for average excluding padded values.\nmaxpoolingNanOpt=0: Nan numbers are not propagated if 0, they are propagated if 1.\nalpha=1: can be used to scale the result.\nhandle: Handle to a previously created cuDNN context. Defaults to a Knet allocated handle.\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.unpool",
    "page": "Reference",
    "title": "Knet.unpool",
    "category": "function",
    "text": "Unpooling; reverse of pooling.\n\nx == pool(unpool(x;o...); o...)\n\n\n\n\n\n"
},

{
    "location": "reference.html#Convolution-and-Pooling-1",
    "page": "Reference",
    "title": "Convolution and Pooling",
    "category": "section",
    "text": "Knet.conv4\nKnet.deconv4\nKnet.mat\nKnet.pool\nKnet.unpool"
},

{
    "location": "reference.html#Recurrent-neural-networks-1",
    "page": "Reference",
    "title": "Recurrent neural networks",
    "category": "section",
    "text": "Knet.rnninit\nKnet.rnnforw\nKnet.rnnparam\nKnet.rnnparams"
},

{
    "location": "reference.html#Knet.bnmoments",
    "page": "Reference",
    "title": "Knet.bnmoments",
    "category": "function",
    "text": "bnmoments(;momentum=0.1, mean=nothing, var=nothing, meaninit=zeros, varinit=ones) can be used  directly load moments from data. meaninit and varinit are called if mean and var are nothing. Type and size of the mean and var are determined automatically from the inputs in the batchnorm calls. A BNMoments object is returned.\n\nBNMoments\n\nA high-level data structure used to store running mean and running variance of batch normalization with the following fields:\n\nmomentum::AbstractFloat: A real number between 0 and 1 to be used as the scale of   last mean and variance. The existing running mean or variance is multiplied by   (1-momentum).\n\nmean: The running mean.\n\nvar: The running variance.\n\nmeaninit: The function used for initialize the running mean. Should either be nothing or of the form (eltype, dims...)->data. zeros is a good option.\n\nvarinit: The function used for initialize the running variance. Should either be nothing or (eltype, dims...)->data. ones is a good option.\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.bnparams",
    "page": "Reference",
    "title": "Knet.bnparams",
    "category": "function",
    "text": "bnparams(etype, channels) creates a single 1d array that contains both scale and bias of batchnorm, where the first half is scale and the second half is bias.\n\nbnparams(channels) calls bnparams with etype=Float64, following Julia convention\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.batchnorm",
    "page": "Reference",
    "title": "Knet.batchnorm",
    "category": "function",
    "text": "batchnorm(x[, moments, params]; kwargs...) performs batch normalization to x with optional scaling factor and bias stored in params.\n\n2d, 4d and 5d inputs are supported. Mean and variance are computed over dimensions (2,), (1,2,4) and (1,2,3,5) for 2d, 4d and 5d arrays, respectively.\n\nmoments stores running mean and variance to be used in testing. It is optional in the training mode, but mandatory in the test mode. Training and test modes are controlled by the training keyword argument.\n\nparams stores the optional affine parameters gamma and beta. bnparams function can be used to initialize params.\n\nExample\n\n# Inilization, C is an integer\nmoments = bnmoments()\nparams = bnparams(C)\n...\n# size(x) -> (H, W, C, N)\ny = batchnorm(x, moments, params)\n# size(y) -> (H, W, C, N)\n\nKeywords\n\neps=1e-5: The epsilon parameter added to the variance to avoid division by 0.\n\ntraining: When training is true, the mean and variance of x are used and moments  argument is modified if it is provided. When training is false, mean and variance stored in  the moments argument are used. Default value is true when at least one of x and params  is AutoGrad.Value, false otherwise.\n\n\n\n\n\n"
},

{
    "location": "reference.html#Batch-Normalization-1",
    "page": "Reference",
    "title": "Batch Normalization",
    "category": "section",
    "text": "Knet.bnmoments\nKnet.bnparams\nKnet.batchnorm"
},

{
    "location": "reference.html#Optimization-methods-1",
    "page": "Reference",
    "title": "Optimization methods",
    "category": "section",
    "text": "Knet.update!\nKnet.optimizers\nKnet.Adadelta\nKnet.Adagrad\nKnet.Adam\nKnet.Momentum\nKnet.Nesterov\nKnet.Rmsprop\nKnet.Sgd"
},

{
    "location": "reference.html#Knet.goldensection",
    "page": "Reference",
    "title": "Knet.goldensection",
    "category": "function",
    "text": "goldensection(f,n;kwargs) => (fmin,xmin)\n\nFind the minimum of f using concurrent golden section search in n dimensions. See Knet.goldensection_demo() for an example.\n\nf is a function from a Vector{Float64} of length n to a Number.  It can return NaN for out of range inputs.  Goldensection will always start with a zero vector as the initial input to f, and the initial step size will be 1 in each dimension.  The user should define f to scale and shift this input range into a vector meaningful for their application. For positive inputs like learning rate or hidden size, you can use a transformation such as x0*exp(x) where x is a value goldensection passes to f and x0 is your initial guess for this value. This will effectively start the search at x0, then move with multiplicative steps.\n\nI designed this algorithm combining ideas from Golden Section Search and Hill Climbing Search. It essentially runs golden section search concurrently in each dimension, picking the next step based on estimated gain.\n\nKeyword arguments\n\ndxmin=0.1: smallest step size.\naccel=φ: acceleration rate. Golden ratio φ=1.618... is best.\nverbose=false: use true to print individual steps.\nhistory=[]: cache of [(x,f(x)),...] function evaluations.\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.hyperband",
    "page": "Reference",
    "title": "Knet.hyperband",
    "category": "function",
    "text": "hyperband(getconfig, getloss, maxresource=27, reduction=3)\n\nHyperparameter optimization using the hyperband algorithm from (Lisha et al. 2016).  You can try a simple MNIST example using Knet.hyperband_demo(). \n\nArguments\n\ngetconfig() returns random configurations with a user defined type and distribution.\ngetloss(c,n) returns loss for configuration c and number of resources (e.g. epochs) n.\nmaxresource is the maximum number of resources any one configuration should be given.\nreduction is an algorithm parameter (see paper), 3 is a good value.\n\n\n\n\n\n"
},

{
    "location": "reference.html#Hyperparameter-optimization-1",
    "page": "Reference",
    "title": "Hyperparameter optimization",
    "category": "section",
    "text": "Knet.goldensection\nKnet.hyperband"
},

{
    "location": "reference.html#Knet.bilinear",
    "page": "Reference",
    "title": "Knet.bilinear",
    "category": "function",
    "text": "Bilinear interpolation filter weights; used for initializing deconvolution layers.\n\nAdapted from https://github.com/shelhamer/fcn.berkeleyvision.org/blob/master/surgery.py#L33\n\nArguments:\n\nT : Data Type\n\nfw: Width upscale factor\n\nfh: Height upscale factor\n\nIN: Number of input filters\n\nON: Number of output filters\n\nExample usage:\n\nw = bilinear(Float32,2,2,128,128)\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.gaussian",
    "page": "Reference",
    "title": "Knet.gaussian",
    "category": "function",
    "text": "gaussian(a...; mean=0.0, std=0.01)\n\nReturn a Gaussian array with a given mean and standard deviation.  The a arguments are passed to randn.\n\n\n\n\n\n"
},

{
    "location": "reference.html#Knet.xavier",
    "page": "Reference",
    "title": "Knet.xavier",
    "category": "function",
    "text": "xavier(a...)\n\nXavier initialization.  The a arguments are passed to rand.  See (Glorot and Bengio 2010) for a description. Caffe implements this slightly differently. Lasagne calls it GlorotUniform.\n\n\n\n\n\n"
},

{
    "location": "reference.html#Initialization-1",
    "page": "Reference",
    "title": "Initialization",
    "category": "section",
    "text": "Knet.bilinear\nKnet.gaussian\nKnet.xavier"
},

{
    "location": "reference.html#AutoGrad-(advanced)-1",
    "page": "Reference",
    "title": "AutoGrad (advanced)",
    "category": "section",
    "text": "AutoGrad.getval\nAutoGrad.@primitive\nAutoGrad.@zerograd"
},

{
    "location": "reference.html#Function-Index-1",
    "page": "Reference",
    "title": "Function Index",
    "category": "section",
    "text": "Pages = [\"reference.md\"]"
},

{
    "location": "backprop.html#",
    "page": "Backpropagation",
    "title": "Backpropagation",
    "category": "page",
    "text": ""
},

{
    "location": "backprop.html#Backpropagation-1",
    "page": "Backpropagation",
    "title": "Backpropagation",
    "category": "section",
    "text": "note: Concepts\nsupervised learning, training data, regression, squared error, linear regression, stochastic gradient descentArthur Samuel, the author of the first self-learning checkers program, defined machine learning as a \"field of study that gives computers the ability to learn without being explicitly programmed\". This leaves the definition of learning a bit circular. Tom M. Mitchell provided a more formal definition: \"A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P if its performance at tasks in T, as measured by P, improves with experience E,\" where the task, the experience, and the performance measure are to be specified based on the problem.We will start with supervised learning, where the task is to predict the output of an unknown system given its input, and the experience consists of a set of example input-output pairs, also known as the training data. When the outputs are numeric such problems are called regression. In linear regression we use a linear function as our model:haty = W x + bHere x is the model input, haty is the model output, W is a matrix of weights, and b is a vector of biases. By adjusting the parameters of this model, i.e. the weights and the biases, we can make it compute any linear function of x.\"All models are wrong, but some models are useful.\" George Box famously said. We do not necessarily know that the system whose output we are trying to predict is governed by a linear relationship. All we know is a finite number of input-output examples:mathcalD=(x_1y_1)ldots(x_Ny_N)It is just that we have to start model building somewhere and the set of all linear functions is a good place to start for now.A commonly used performance measure in regression problems is the squared error, i.e. the average squared difference between the actual output values and the ones predicted by the model. So our goal is to find model parameters that minimize the squared error:argmin_Wb frac1N sum_n=1^N  haty_n - y_n ^2Where haty_n = W x_n + b denotes the output predicted by the model for the n th example.There are several methods to find the solution to the problem of minimizing squared error. Here we will present the stochastic gradient descent (SGD) method because it generalizes well to more complex models. In SGD, we take the training examples one at a time (or in small groups called minibatches), compute the gradient of the error with respect to the parameters, and move the parameters a small step in the direction that will decrease the error. First some notes on the math."
},

{
    "location": "backprop.html#Partial-derivatives-1",
    "page": "Backpropagation",
    "title": "Partial derivatives",
    "category": "section",
    "text": "When we have a function with several inputs and one output, we can look at how the function value changes in response to a small change in one of its inputs holding the rest fixed. This is called a partial derivative. Let us consider the squared error for the n th input as an example:J =  W x_n + b - y_n ^2So the partial derivative partial J  partial w_ij would tell us how many units J would move if we moved w_ij in W one unit (at least for small enough units). Here is a more graphical representation:(Image: image)In this figure, it is easier to see that the machinery that generates J has many \"inputs\". In particular we can talk about how J is effected by changing parameters W and b, as well as changing the input x, the model output haty, the desired output y, or intermediate values like z or r. So partial derivatives like partial J  partial x_i or partial J  partial haty_j are fair game and tell us how J would react in response to small changes in those quantities."
},

{
    "location": "backprop.html#Chain-rule-1",
    "page": "Backpropagation",
    "title": "Chain rule",
    "category": "section",
    "text": "The chain rule allows us to calculate partial derivatives in terms of other partial derivatives, simplifying the overall computation. We will go over it in some detail as it forms the basis of the backpropagation algorithm. For now let us assume that each of the variables in the above example are scalars. We will start by looking at the effect of r on J and move backward from there. Basic calculus tells us that:J = r^2 \npartial Jpartial r = 2rThus, if r=5 and we decrease r by a small epsilon, the squared error J will go down by 10epsilon. Now let\'s move back a step and look at haty:r = haty - y \npartial rpartial haty = 1So how much effect will a small epsilon decrease in haty have on J when r=5? Well, when haty goes down by epsilon, so will r, which means J will go down by 10epsilon again. The chain rule expresses this idea:fracpartial Jpartialhaty = \nfracpartial Jpartial r\nfracpartial rpartialhaty\n= 2rGoing back further, we have:haty = z + b \npartial hatypartial b = 1 \npartial hatypartial z = 1 Which means b and z have the same effect on J as haty and r, i.e. decreasing them by epsilon will decrease J by 2repsilon as well. Finally:z = w x \npartial zpartial x = w \npartial zpartial w = xThis allows us to compute the effect of w on J in several steps: moving w by epsilon will move z by xepsilon, haty and r will move exactly the same amount because their partials with z are 1, and finally since r moves by xepsilon, J will move by 2rxepsilon.fracpartial Jpartial w =\nfracpartial Jpartial r\nfracpartial rpartial haty\nfracpartial hatypartial z\nfracpartial zpartial w\n= 2rxWe can represent this process of computing partial derivatives as follows:(Image: image)Note that we have the same number of boxes and operations, but all the arrows are reversed. Let us call this the backward pass, and the original computation in the previous picture the forward pass. Each box in this backward-pass picture represents the partial derivative for the corresponding box in the previous forward-pass picture. Most importantly, each computation is local: each operation takes the partial derivative of its output, and multiplies it with a factor that only depends on the original input/output values to compute the partial derivative of its input(s). In fact we can implement the forward and backward passes for the linear regression model using the following local operations:(Image: image)(Image: image)(Image: image)(Image: image)"
},

{
    "location": "backprop.html#Multiple-dimensions-1",
    "page": "Backpropagation",
    "title": "Multiple dimensions",
    "category": "section",
    "text": "Let\'s look at the case where the input and output are not scalars but vectors. In particular assume that x in mathbbR^D and y in mathbbR^C. This makes W in mathbbR^Ctimes D a matrix and zbhatyr vectors in mathbbR^C. During the forward pass, z=Wx operation is now a matrix-vector product, the additions and subtractions are elementwise operations. The squared error J=r^2=sum r_i^2 is still a scalar. For the backward pass we ask how much each element of these vectors or matrices effect J. Starting with r:J = sum r_i^2 \npartial Jpartial r_i = 2r_iWe see that when r is a vector, the partial derivative of each component is equal to twice that component. If we put these partial derivatives together in a vector, we obtain a gradient vector:nabla_r J\nequiv langle fracpartial Jpartial r_1 cdots fracpartial Jpartial r_C rangle\n= langle 2 r_1 ldots 2 r_C rangle \n= 2vecrThe addition, subtraction, and square norm operations work the same way as before except they act on each element. Moving back through the elementwise operations we see that:nabla_r J = nabla_haty J = nabla_b J = nabla_z J = 2vecrFor the operation z=Wx, a little algebra will show you that:nabla_W J = nabla_z J cdot x^T \nnabla_x J = W^T cdot nabla_z JNote that the gradient of a variable has the same shape as the variable itself. In particular nabla_W J is a Ctimes D matrix. Here is the graphical representation for matrix multiplication:(Image: image)"
},

{
    "location": "backprop.html#Multiple-instances-1",
    "page": "Backpropagation",
    "title": "Multiple instances",
    "category": "section",
    "text": "We will typically process data multiple instances at a time for efficiency. Thus, the input x will be a Dtimes N matrix, and the output y will be a Ctimes N matrix, the N columns representing N different instances. Please verify to yourself that the forward and backward operations as described above handle this case without much change: the elementwise operations act on the elements of the matrices just like vectors, and the matrix multiplication and its gradient remains the same. Here is a picture of the forward and backward passes:(Image: image)The only complication is at the addition of the bias vector. In the batch setting, we are adding binmathbbR^Ctimes 1 to zinmathbbR^Ctimes N. This will be a broadcasting operation, i.e. the vector b will be added to each column of the matrix z to get haty. In the backward pass, we\'ll need to add the columns of nabla_haty J to get the gradient nabla_b J."
},

{
    "location": "backprop.html#Stochastic-Gradient-Descent-1",
    "page": "Backpropagation",
    "title": "Stochastic Gradient Descent",
    "category": "section",
    "text": "The gradients calculated by backprop, nabla_w J and nabla_b J, tell us how much small changes in corresponding entries in w and b will effect the error (for the last instance, or minibatch). Small steps in the gradient direction will increase the error, steps in the opposite direction will decrease the error.In fact, we can show that the gradient is the direction of steepest ascent. Consider a unit vector v pointing in some arbitrary direction.  The rate of change in this direction, nabla_v J (directional derivative), is given by the projection of v onto the gradient, nabla J, i.e. their dot product nabla J cdot v:nabla_v J = fracpartial Jpartial x_1 v_1 + fracpartial Jpartial x_2 v_2 + cdots = nabla J cdot vWhat direction maximizes this dot product? Recall that:nabla J cdot v =  nabla J   v  cos(theta)where theta is the angle between v and the gradient vector. cos(theta) is maximized when the two vectors point in the same direction. So if you are going to move a fixed (small) size step, the gradient direction gives you the biggest bang for the buck.This suggests the following update rule:w leftarrow w - nabla_w JThis is the basic idea behind Stochastic Gradient Descent (SGD): Go over the training set instance by instance (or minibatch by minibatch). Run the backpropagation algorithm to calculate the error gradients. Update the weights and biases in the opposite direction of these gradients. Rinse and repeat..."
},

{
    "location": "backprop.html#Housing-Example-1",
    "page": "Backpropagation",
    "title": "Housing Example",
    "category": "section",
    "text": "We will use the Boston Housing dataset from the UCI Machine Learning Repository to train a linear regression model using backprop and SGD. The dataset has housing related information for 506 neighborhoods in Boston from 1978. Each neighborhood has 14 attributes, the goal is to use the first 13, such as average number of rooms per house, or distance to employment centers, to predict the 14’th attribute: median dollar value of the houses.First we download and split the data:using Knet\ninclude(Knet.dir(\"data\",\"housing.jl\"))\nx,y = housing()  # x is (13,506); y is (1,506)Then we define our linear regression model and the squared error loss. Note that backprop is implemented by the grad function in Knet: grad(f) returns a function g that takes the same inputs as f and returns the gradient with respect to the first argument:predict(w,x) = w[1]*x .+ w[2]\nloss(w,x,y) = mean(abs2,y-predict(w,x))\nlossgradient = grad(loss)	# grad gives the gradient function wrt w\nw = [ 0.1*rand(1,13), 0.0 ]	# initialize the weight vector and biasFinally, here is the SGD training loop (see the full example in the Knet tutorial):for epoch in 1:10\n    dw = lossgradient(w, x, y)\n    for i in 1:length(w)\n        w[i] -= lr * dw[i]\n    end\nendHere is a plot of the loss value vs training epochs (an epoch is a single pass over the whole training set):(Image: image)"
},

{
    "location": "backprop.html#Problems-with-SGD-1",
    "page": "Backpropagation",
    "title": "Problems with SGD",
    "category": "section",
    "text": "Over the years, people have noted many subtle problems with the SGD algorithm and suggested improvements:Step size: If the step sizes are too small, the SGD algorithm will take too long to converge. If they are too big it will overshoot the optimum and start to oscillate. So we scale the gradients with an adjustable parameter called the learning rate eta:w leftarrow w - eta nabla_w JStep direction: More importantly, it turns out the gradient (or its opposite) is often NOT the direction you want to go in order to minimize error. Let us illustrate with a simple picture:(Image: image)The figure on the left shows what would happen if you stood on one side of the long narrow valley and took the direction of steepest descent: this would point to the other side of the valley and you would end up moving back and forth between the two sides, instead of taking the gentle incline down as in the figure on the right. The direction across the valley has a high gradient but also a high curvature (second derivative) which means the descent will be sharp but short lived. On the other hand the direction following the bottom of the valley has a smaller gradient and low curvature, the descent will be slow but it will continue for a longer distance. Newton\'s method adjusts the direction taking into account the second derivative:(Image: image)In this figure, the two axes are w1 and w2, two parameters of our network, and the contour plot represents the error with a minimum at x. If we start at x0, the Newton direction (in red) points almost towards the minimum, whereas the gradient (in green), perpendicular to the contours, points to the right.Unfortunately Newton\'s direction is expensive to compute. However, it is also probably unnecessary for several reasons: (1) Newton gives us the ideal direction for second degree objective functions, which our objective function almost certainly is not, (2) The error function whose gradient backprop calculated is the error for the last minibatch/instance only, which at best is a very noisy approximation of the real error function, thus we shouldn\'t spend too much effort trying to get the direction exactly right.So people have come up with various approximate methods to improve the step direction. Instead of multiplying each component of the gradient with the same learning rate, these methods scale them separately using their running average (momentum, Nesterov), or RMS (Adagrad, Rmsprop). Some even cap the gradients at an arbitrary upper limit (gradient clipping) to prevent instabilities.You may wonder whether these methods still give us directions that consistently increase/decrease the objective function. If we do not insist on the maximum increase, any direction whose components have the same signs as the gradient vector is guaranteed to increase the function (for short enough steps). The reason is again given by the dot product nabla J cdot v. As long as these two vectors carry the same signs in the same components, the dot product, i.e. the rate of change along v, is guaranteed to be positive.Minimize what? The final problem with gradient descent, other than not telling us the ideal step size or direction, is that it is not even minimizing the right objective! We want small error on never before seen test data, not just on the training data. The truth is, a sufficiently large model with a good optimization algorithm can get arbitrarily low error on any finite training data (e.g. by just memorizing the answers). And it can typically do so in many different ways (typically many different local minima for training error in weight space exist). Some of those ways will generalize well to unseen data, some won\'t. And unseen data is (by definition) not seen, so how will we ever know which weight settings will do well on it?There are at least three ways people deal with this problem: (1) Bayes tells us that we should use all possible models and weigh their answers by how well they do on training data (see Radford Neal\'s fbm), (2) New methods like dropout that add distortions and noise to inputs, activations, or weights during training seem to help generalization, (3) Pressuring the optimization to stay in one corner of the weight space (e.g. L1, L2, maxnorm regularization) helps generalization."
},

{
    "location": "backprop.html#References-1",
    "page": "Backpropagation",
    "title": "References",
    "category": "section",
    "text": "UFLDL Tutorial, Linear Regression\ncs231n Optimization Notes\ncs229 Convex optimization overview, Part 2\ncs229 Linear algebra review and reference\ncs229 Review of probability theory"
},

{
    "location": "backprop.html#Notes-1",
    "page": "Backpropagation",
    "title": "Notes",
    "category": "section",
    "text": "Linear regression with a scalar input and output is called simple linear regression, if the input is a vector we have multiple linear regression, and if the output is a vector we have multivariate linear regression."
},

{
    "location": "softmax.html#",
    "page": "Softmax Classification",
    "title": "Softmax Classification",
    "category": "page",
    "text": ""
},

{
    "location": "softmax.html#Softmax-Classification-1",
    "page": "Softmax Classification",
    "title": "Softmax Classification",
    "category": "section",
    "text": "note: Concepts\nclassification, likelihood, softmax, one-hot vectors, zero-one loss, conditional likelihood, MLE, NLL, cross-entropy lossWe will introduce classification problems and some simple models for classification."
},

{
    "location": "softmax.html#Classification-1",
    "page": "Softmax Classification",
    "title": "Classification",
    "category": "section",
    "text": "Classification problems are supervised machine learning problems where the task is to predict a discrete class for a given input (unlike regression where the output was numeric). A typical example is handwritten digit recognition where the input is an image of a handwritten digit, and the output is one of the discrete categories 0 ldots 9. As in all supervised learning problems the training data consists of a set of example input-output pairs."
},

{
    "location": "softmax.html#Likelihood-1",
    "page": "Softmax Classification",
    "title": "Likelihood",
    "category": "section",
    "text": "A natural objective in classification could be to minimize the number of misclassified examples in the training data. This number is known as the zero-one loss. However the zero-one loss has some undesirable properties for training: in particular it is discontinuous. A small change in one of the parameters either has no effect on the loss, or can turn one or more of the predictions from false to true or true to false, causing a discontinuous jump in the objective. This means the gradient of the zero-one loss with respect to the parameters is either undefined or zero, thus not helpful.A more commonly used objective for classification is conditional likelihood: the probability of the observed data given our model and the inputs. Instead of predicting a single class for each instance, we let our model predict a probability distribution over all classes. Then we adjust the weights of the model to increase the probabilities for the correct classes and decrease it for others. This is also known as the maximum likelihood estimation (MLE).Let mathcalX=x_1ldotsx_N be the inputs in the training data, mathcalY=y_1ldotsy_N be the correct classes and theta be the parameters of our model. Conditional likelihood is:L(theta) = P(mathcalYmathcalXtheta) \n= prod_n=1^N P(y_nx_ntheta)The second equation assumes that the data instances were generated independently. We usually work with log likelihood for mathematical convenience: log is a monotonically increasing function, so maximizing likelihood is the same as maximizing log likelihood:ell(theta) = log P(mathcalYmathcalXtheta) \n= sum_n=1^N log P(y_nx_ntheta)We will typically use the negative of ell (machine learning people like to minimize), which is known as negative log likelihood (NLL), or cross-entropy loss."
},

{
    "location": "softmax.html#Softmax-1",
    "page": "Softmax Classification",
    "title": "Softmax",
    "category": "section",
    "text": "A classification model for a problem with C classes typically generates yinmathbbR^C, a vector of C scores (e.g. we might use multivariate linear regression with a vector output as seen in the last chapter).  In general these scores will be arbitrary real numbers.  To go from arbitrary scores yinmathbbR^C to normalized probability estimates pinmathbbR^C for a single instance, we use exponentiation and normalization:p_i = fracexp y_isum_c=1^C exp y_cwhere icin1ldotsC range over classes, and p_i y_i y_c refer to class probabilities and scores for a single instance. This is called the softmax function. A model that converts the unnormalized values at the end of a linear regression to normalized probabilities for classification is called the softmax classifier.We need to figure out the backward pass for the softmax function. In other words if someone gives us the gradient of some objective J with respect to the class probabilities p for a single training instance, what is the gradient with respect to the input of the softmax y? First we\'ll find the partial derivative of one component of p with respect to one component of y:fracpartial p_ipartial y_j \n= fraci=j exp y_i (sum_c exp y_c) - exp y_i exp y_j(sum_c exp y_c)^2\n= i=j p_i - p_i p_jThe square brackets are the Iverson bracket notation, i.e. A is 1 if A is true, and 0 if A is false.Note that a single entry in y effects J through multiple paths (y_j contributes to the denominator of every p_i), and these effects need to be added for partial Jpartial y_j:fracpartial Jpartial y_j\n= sum_i=1^C fracpartial Jpartial p_i\nfracpartial p_ipartial y_j"
},

{
    "location": "softmax.html#One-hot-vectors-1",
    "page": "Softmax Classification",
    "title": "One-hot vectors",
    "category": "section",
    "text": "When using a probabilistic classifier, it is convenient to represent the desired output as a one-hot vector, i.e. a vector in which all entries are \'0\' except a single \'1\'. If the correct class is cin1ldotsC, we represent this with a one-hot vector pinmathbbR^C where p_c = 1 and p_ineq c = 0. Note that p can be viewed as a probability vector where all the probability mass is concentrated at class c. This representation also allows us to have probabilistic targets where there is not a single answer but target probabilities associated with each answer. Given a one-hot (or probabilistic) p, and the model prediction hatp, we can write the log-likelihood for a single instance as:ell = sum_c=1^C p_c log hatp_c"
},

{
    "location": "softmax.html#Gradient-of-log-likelihood-1",
    "page": "Softmax Classification",
    "title": "Gradient of log likelihood",
    "category": "section",
    "text": "To compute the gradient for log likelihood, we need to make the normalization of hatp explicit:beginalign*\nell = sum_c p_c log frachatp_csum_khatp_k \n= (sum_c p_c loghatp_c) - (sum_c p_c log sum_khatp_k) \n= (sum_c p_c loghatp_c) - (log sum_khatp_k) \nfracpartial ellpartial hatp_i =\nfracp_ihatp_i - frac1sum_khatp_k\n= fracp_ihatp_i - 1\nendalign*The gradient with respect to unnormalized y scores takes a particularly simple form:beginalign*\nfracpartialellpartial y_j\n= sum_i fracpartialellpartial hatp_i\nfracpartial hatp_ipartial y_j \n= sum_i (fracp_ihatp_i - 1)(i=j hatp_i - hatp_i hatp_j) \n=  p_j - hatp_j \nnabla_y ell =  p - hatp\nendalign*The gradient with respect to hatp causes numerical overflow when some components of hatp get very small. In practice we usually skip that and directly compute the gradient with respect to y which is numerically stable."
},

{
    "location": "softmax.html#MNIST-example-1",
    "page": "Softmax Classification",
    "title": "MNIST example",
    "category": "section",
    "text": "Let\'s try our softmax classifier on the MNIST handwritten digit classification dataset. Here are the first 8 images from MNIST, the goal is to look at the pixels and classify each image as one of the digits 0-9:(Image: image)Load and minibatch the data. dtrn and dtst consist of xy pairs [ (x1,y1), (x2,y2), ... ] where xi,yi are minibatches of 100 instances:using Knet\ninclude(Knet.dir(\"data\",\"mnist.jl\"))\nxtrn,ytrn,xtst,ytst = mnist()\ndtst = minibatch(xtst,ytst,100)\ndtrn = minibatch(xtrn,ytrn,100)Here is the softmax classifier in Knet:predict(w,x) = w[1]*mat(x) .+ w[2]	  # mat converts x to 2D\nloss(w,x,ygold) = nll(predict(w,x),ygold) # nll computes negative log likelihood\nlossgradient = grad(loss)                 # grad returns gradient function\nwsoft=[ 0.1*randn(10,784), zeros(10,1) ]  # initial weights and biasHere is the SGD training loop (see the full example in the Knet tutorial):function train!(w, data; lr=.1)\n    for (x,y) in data\n        dw = lossgradient(w, x, y)\n        for i in 1:length(w)\n            w[i] -= lr * dw[i]\n        end\n    end\n    return w\nendHere are the plots of the negative log likelihood and misclassification error vs training epochs:(Image: image)We can observe a few things. First the training losses are better than the test losses. This means there is some overfitting, i.e. the model is learning spurious regularities in the training data that do not generalize to test data. Second, it does not look like the training loss is going down to zero. This means there is also underfitting, i.e. the softmax model is not flexible enough to fit the training data exactly."
},

{
    "location": "softmax.html#Representational-power-1",
    "page": "Softmax Classification",
    "title": "Representational power",
    "category": "section",
    "text": "So far we have seen how to create a machine learning model as a differentiable program (linear regression, softmax classification) whose parameters can be adjusted to hopefully imitate whatever process generated our training data. A natural question to ask is whether a particular model can behave like any system we want (given the right parameters) or whether there is a limit to what it can represent.It turns out the softmax classifier is quite limited in its representational power: it can only represent linear classification boundaries. To show this, remember the form of the softmax classifier which gives the probability of the i\'th class as:p_i = fracexp y_isum_c=1^C exp y_cwhere y_i is a linear function of the input x. Note that p_i is a monotonically increasing function of y_i, so for two classes i and j, p_i  p_j iff y_i  y_j. The boundary between two classes i and j is the set of inputs for which the probability of the two classes are equal:beginalign*\np_i = p_j \ny_i = y_j \nw_i x + b_i = w_j x + b_j \n(w_i - w_j) x + (b_i - b_j) = 0\nendalign*where w_i b_i refer to the i\'th row of w and b. This is a linear equation, i.e. the border between two classes will always be linear in the input space with the softmax classifier:(Image: image)In the MNIST example, the relation between the pixels and the digit classes is unlikely to be this simple. That is why we are stuck at 6-7% training error. To get better results we need more powerful models."
},

{
    "location": "softmax.html#References-1",
    "page": "Softmax Classification",
    "title": "References",
    "category": "section",
    "text": "UFLDL Tutorial, Softmax Regression"
},

{
    "location": "mlp.html#",
    "page": "Multilayer Perceptrons",
    "title": "Multilayer Perceptrons",
    "category": "page",
    "text": ""
},

{
    "location": "mlp.html#Multilayer-Perceptrons-1",
    "page": "Multilayer Perceptrons",
    "title": "Multilayer Perceptrons",
    "category": "section",
    "text": "In this section we create multilayer perceptrons by stacking multiple linear layers with non-linear activation functions in between."
},

{
    "location": "mlp.html#Stacking-linear-classifiers-is-useless-1",
    "page": "Multilayer Perceptrons",
    "title": "Stacking linear classifiers is useless",
    "category": "section",
    "text": "We could try stacking multiple linear classifiers together. Here is a two layer model:function multilinear(w, x, ygold)\n    y1 = w[1] * x  .+ w[2]\n    y2 = w[3] * y1 .+ w[4]\n    return softloss(ygold, y2)\nendNote that instead of using y1 as our prediction, we used it as input to another linear classifier. Intermediate arrays like y1 are known as hidden layers because their contents are not directly visible outside the model.If you experiment with this model (I suggest using a smaller learning rate, e.g. 0.01), you will see that it performs similarly to the original softmax model. The reason is simple to see if we write the function computed in mathematical notation and do some algebra:beginalign*\nhatp = mboxsoft(W_2 (W_1 x + b_1) + b_2) \n= mboxsoft((W_2 W_1) x + W_2 b_1 + b_2) \n= mboxsoft(W x + b)\nendalign*where W=W_2 W_1 and b=W_2 b_1 + b_2. In other words, we still have a linear classifier! No matter how many linear functions you put on top of each other, what you get at the end is still a linear function. So this model has exactly the same representation power as the softmax model. Unless, we add a simple instruction..."
},

{
    "location": "mlp.html#Introducing-nonlinearities-1",
    "page": "Multilayer Perceptrons",
    "title": "Introducing nonlinearities",
    "category": "section",
    "text": "Here is a slightly modified version of the two layer model:function mlp(w, x, ygold)\n    y1 = relu(w[1] * x .+ w[2])\n    y2 = w[3] * y1 .+ w[4]\n    return softloss(ygold, y2)\nendMLP in mlp stands for multilayer perceptron which is one name for this type of model. The only difference with the previous example is the relu() function we introduced in the first line. This is known as the rectified linear unit (or rectifier), and is a simple function defined by relu(x)=max(x,0) applied elementwise to the input array. So mathematically what we are computing is:hatp = mboxsoft(W_2 mboxrelu(W_1 x + b_1) + b_2) This cannot be reduced to a linear function, which may not seem like a big difference but what a difference it makes to the model! Here are the learning curves for mlp using a hidden layer of size 64:(Image: image)Here are the learning curves for the linear model softmax plotted at the same scale for comparison:(Image: image)We can observe a few things: using MLP instead of a linear model brings the training error from 6.7% to 0 and the test error from 7.5% to 2.0%. There is still overfitting: the test error is not as good as the training error, but the model has no problem classifying the training data (all 60,000 examples) perfectly!"
},

{
    "location": "mlp.html#Types-of-nonlinearities-(activation-functions)-1",
    "page": "Multilayer Perceptrons",
    "title": "Types of nonlinearities (activation functions)",
    "category": "section",
    "text": "The functions we throw between linear layers to break the linearity are called nonlinearities or activation functions. Here are some activation functions that have been used as nonlinearities:(Image: image)The step functions were the earliest activation functions used in the perceptrons of 1950s. Unfortunately they do not give a useful derivative that can be used for training a multilayer model. Sigmoid and tanh (sigm and tanh in Knet) became popular in 1980s as smooth approximations to the step functions and allowed the application of the backpropagation algorithm. Modern activation functions like relu and maxout are piecewise linear. They are computationally inexpensive (no exponentials), and perform well in practice. We are going to use relu in most of our models. Here is the backward passes for sigmoid, tanh, and relu:function forward backward\nsigmoid y = frac11+e^-x nabla_x J = y(1-y) nabla_y J\ntanh y = frace^x-e^-xe^x+e^-x nabla_x J = (1+y)(1-y) nabla_y J\nrelu y = max(0x) nabla_x J =  y geq 0  nabla_y JSee (Karpathy, 2016, Ch 1) for more on activation functions and MLP architecture."
},

{
    "location": "mlp.html#Representational-power-1",
    "page": "Multilayer Perceptrons",
    "title": "Representational power",
    "category": "section",
    "text": "You might be wondering whether relu had any special properties or would any of the other nonlinearities be sufficient. Another question is whether there are functions multilayer perceptrons cannot represent and if so whether adding more layers or different types of functions would increase their representational power. The short answer is that a two layer model can approximate any function if the hidden layer is large enough, and can do so with any of the nonlinearities introduced in the last section. Multilayer perceptrons are universal function approximators!We said that a two-layer MLP is a universal function approximator given enough hidden units. This brings up the questions of efficiency: how many hidden units / parameters does one need to approximate a given function and whether the number of units depends on the number of hidden layers. The efficiency is important both computationally and statistically: models with fewer parameters can be evaluated faster, and can learn from fewer examples (ref?). It turns out there are functions whose representations are exponentially more expensive in a shallow network compared to a deeper network (see (Nielsen, 2016, Ch 5) for a discussion). Recent winners of image recognition contests use networks with dozens of convolutional layers. The advantage of deeper MLPs is empirically less clear, but you should experiment with the number of units and layers using a development set when starting a new problem.Please see (Nielsen, 2016, Ch 4) for an intuitive explanation of the universality result and (Bengio et al. 2016, Ch 6.4) for a more in depth discussion and references."
},

{
    "location": "mlp.html#Matrix-vs-Neuron-Pictures-1",
    "page": "Multilayer Perceptrons",
    "title": "Matrix vs Neuron Pictures",
    "category": "section",
    "text": "So far we have introduced multilayer perceptrons (aka artificial neural networks) using matrix operations. You may be wondering why people call them neural networks and be confused by terms like layers and units. In this section we will give the correspondence between the matrix view and the neuron view. Here is a schematic of a biological neuron (figures from (Karpathy, 2016, Ch 1)):(Image: image)A biological neuron is a complex organism supporting thousands of chemical reactions simultaneously under the regulation of thousands of genes, communicating with other neurons through electrical and chemical pathways involving dozens of different types of neurotransmitter molecules. We assume (do not know for sure) that the main mechanism of communication between neurons is electrical spike trains that travel from the axon of the source neuron, through connections called synapses, into dendrites of target neurons. We simplify this picture further representing the strength of the spikes and the connections with simple numbers to arrive at this cartoon model:(Image: )This model is called an artificial neuron, a perceptron, or simply a unit in neural network literature. We know it as the softmax classifier.When a number of these units are connected in layers, we get a multilayer perceptron. When counting layers, we ignore the input layer. So the softmax classifier can be considered a one layer neural network. Here is a neural network picture and the corresponding matrix picture for a two layer model:(Image: image)(Image: image)Here is a neural network picture and the corresponding matrix picture for a three layer model:(Image: image)(Image: image)We can use the following elementwise notation for the neural network picture (e.g. similar to the one used in UFLDL):x_i^(l) = f(b_i^(l) + sum_j w_ij^(l) x_j^(l-1))Here x_i^(l) refers to the activation of the i th unit in l th layer. We are counting the input as the 0\'th layer. f is the activation function, b_i^(l) is the bias term. w_ij^(l) is the weight connecting unit j from layer l-1 to unit i from layer l. The corresponding matrix notation is:x^(l) = f(W^(l) x^(l-1) + b^(l))"
},

{
    "location": "mlp.html#Programming-Example-1",
    "page": "Multilayer Perceptrons",
    "title": "Programming Example",
    "category": "section",
    "text": "In this section we introduce several Knet features that make it easier to define complex models. As our working example, we will go through several attempts to define a 3-layer MLP. Here is our first attempt:function mlp3a(w, x0)\n    x1 = relu(w[1] * x0 .+ w[2])\n    x2 = relu(w[3] * x1 .+ w[4])\n    return w[5] * x2 .+ w[6]\nendWe can identify bad software engineering practices in this definition in that it contains a lot of repetition.The key to controlling complexity in computer languages is abstraction. Abstraction is the ability to name compound structures built from primitive parts, so they too can be used as primitives.Defining new operatorsWe could make the definition of mlp3 more compact by defining separate functions for its layers:function mlp3b(w, x0)\n    x1 = relu_layer1(w, x0)\n    x2 = relu_layer2(w, x1)\n    return pred_layer3(w, x2)\nend\n\nfunction relu_layer1(w, x)\n    return relu(w[1] * x .+ w[2])\nend\n\nfunction relu_layer2(w, x)\n    return relu(w[3] * x .+ w[4])\nend\n\nfunction pred_layer3(x)\n    return w[5] * x .+ w[6]\nendThis may make the definition of mlp3b a bit more readable. But it does not reduce the overall length of the program. The helper functions like relu_layer1 and relu_layer2 are too similar except for the weights they use and can be reduced to a single function.Increasing the number of layersWe can define a more general mlp model of arbitrary length. With weights of length 2n, the following model will have n layers, n-1 layers having the relu non-linearity:function mlp_nlayer(w,x)\n    for i=1:2:length(w)-2\n        x = relu(w[i] * x .+ w[i+1]))\n    end\n    return w[end-1] * x .+ w[end]\nendIn this example stacking the layers in a loop saved us only two lines, but the difference can be more significant in deeper models."
},

{
    "location": "mlp.html#References-1",
    "page": "Multilayer Perceptrons",
    "title": "References",
    "category": "section",
    "text": "http://neuralnetworksanddeeplearning.com/chap4.html\nhttp://www.deeplearningbook.org/contents/mlp.html\nhttp://cs231n.github.io/neural-networks-1\nhttp://ufldl.stanford.edu/tutorial/supervised/MultiLayerNeuralNetwork\nhttp://www.wildml.com/2015/09/implementing-a-neural-network-from-scratch"
},

{
    "location": "cnn.html#",
    "page": "Convolutional Neural Networks",
    "title": "Convolutional Neural Networks",
    "category": "page",
    "text": ""
},

{
    "location": "cnn.html#Convolutional-Neural-Networks-1",
    "page": "Convolutional Neural Networks",
    "title": "Convolutional Neural Networks",
    "category": "section",
    "text": ""
},

{
    "location": "cnn.html#Motivation-1",
    "page": "Convolutional Neural Networks",
    "title": "Motivation",
    "category": "section",
    "text": "Let\'s say we are trying to build a model that will detect cats in photographs. The average resolution of images in ILSVRC is 482x415, with three channels (RGB) this makes the typical input size 482x415x3=600,090. Each hidden unit connected to the input in a multilayer perceptron would have 600K parameters, a single hidden layer of size 1000 would have 600 million parameters. Too many parameters cause three types of problems: (1) runtime: large models are computationally costly to train and run. (2) memory: today\'s GPUs have limited amount of memory (4G-12G) and large networks fill them up quickly. (3) sample complexity: models with a large number of parameters are difficult to train without overfitting: we need a lot of data, strong regularization, and/or a good initialization to learn with large models.One problem with the MLP is that it is fully connected: every hidden unit is connected to every other in adjacent layers. The model does not assume any spatial relationships between pixels, in fact we can permute all the pixels in an image and the performance of the MLP would be the same!  We could instead have an architecture where each hidden unit is connected to a small patch of the image, say 40x40. Each such locally connected hidden unit would have 40x40x3=4800 parameters instead of 600K. For the price (in memory) of one fully connected hidden unit (600K), we could have 125 of these locally connected mini-hidden-units (4800 each) with receptive fields spread around the image.The second problem with the MLP is that it does not take advantage of the symmetry in the problem: a cat in the lower right corner of the image may be similar to a cat in the upper left corner. This means the local hidden units looking at these two patches can share the same weights. We can take one 40x40 cat filter and apply it to each 40x40 patch in the image taking up only 4800 parameters.A convolutional neural network (aka CNN or ConvNet) combines these two ideas and uses operations that are local and that share weights. CNNs commonly use three types of operations: convolution, pooling, and normalization which we describe next."
},

{
    "location": "cnn.html#Convolution-1",
    "page": "Convolutional Neural Networks",
    "title": "Convolution",
    "category": "section",
    "text": "Convolution is the main operation that provides sparse connectivity and weight sharing.  For simplicity we start describing convolution in 1-D using the conv4 primitive from Knet. We next look at three keyword options that provide variations on the convolution operation: padding, stride, and mode.  We then describe how conv4 handles multiple dimensions, filters, and instances in parallel.The relationship between convolution and matrix multiplication allows the use of efficient algorithms developed for matrix multiplication in convolution implementations.  The fact that convolution and matrix multiplication can be implemented in terms of each other clarifies the distinction between CNNs and MLPs as one of efficiency, not representative power.  We end this section by describing backpropagation for convolution."
},

{
    "location": "cnn.html#conv_1d-1",
    "page": "Convolutional Neural Networks",
    "title": "Convolution in 1-D",
    "category": "section",
    "text": "Let w x be two 1-D vectors with W X elements respectively. In our examples, we will assume x is the input (consider it a 1-D image) and w is a filter (aka kernel) with WX. The 1-D convolution operation y=wast x results in a vector with Y=X-W+1 elements defined as:y_k equiv sum_i+j=k+W x_i w_jor equivalentlyy_k equiv sum_i=k^k+W-1 x_i w_k+W-iwhere iin1X jin1W kin1Y. We get each entry in y by multiplying pairs of matching entries in x and w and summing the results. Matching entries in x and w are the ones whose indices add up to a constant. This can be visualized as flipping w, sliding it over x, and at each step writing their dot product into a single entry in y. Here is an example in Julia you should be able to calculate by hand:julia> using Knet\njulia> w = reshape([1.0,2.0,3.0], (3,1,1,1))\n3×1×1×1 Array{Float64,4}: [1,2,3]\njulia> x = reshape([1.0:7.0...], (7,1,1,1))\n7×1×1×1 Array{Float64,4}: [1,2,3,4,5,6,7]\njulia> y = conv4(w, x)\n5×1×1×1 Array{Float64,4}: [10,16,22,28,34]conv4 is the convolution operation in Knet (based on the CUDNN implementation). For reasons that will become clear it works with 4-D and 5-D arrays, so we reshape our 1-D input vectors by adding extra singleton dimensions at the end.  The convolution of w=[1,2,3] and x=[1,2,3,4,5,6,7] gives y=[10,16,22,28,34]. For example, the third element of y, 22, can be obtained by reversing w to [3,2,1] and taking its dot product starting with the third element of x, [3,4,5]."
},

{
    "location": "cnn.html#conv_padding-1",
    "page": "Convolutional Neural Networks",
    "title": "Padding",
    "category": "section",
    "text": "In the last example, the input x had 7 dimensions, the output y had 5. In image processing applications we typically want to keep x and y the same size. For this purpose we can provide a padding keyword argument to the conv4 operator. If padding=k, x will be assumed padded with k zeros on the left and right before the convolution, e.g. padding=1 means treat x as [0 1 2 3 4 5 6 7 0]. The default padding is 0. For inputs in D-dimensions we can specify padding with a D-tuple, e.g. padding=(1,2) for 2D, or a single number, e.g. padding=1 which is shorthand for padding=(1,1). The result will have Y=X+2P-W+1 elements where P is the padding size. Therefore to preserve the size of x when W=3 we should use padding=1.julia> y = conv4(w, x; padding=(1,0))\n7×1×1×1 Array{Float64,4}: [4,10,16,22,28,34,32]For example, to calculate the first entry of y, take the dot product of the inverted w, [3,2,1] with the first three elements of the padded x, [0 1 2]. You can see that in order to preserve the input size, Y=X, given a filter size W, the padding should be set to P=(W-1)2. This will work if W is odd."
},

{
    "location": "cnn.html#conv_stride-1",
    "page": "Convolutional Neural Networks",
    "title": "Stride",
    "category": "section",
    "text": "In the preceding examples we shift the inverted w by one position after each dot product. In some cases you may want to skip two or more positions. This will effectively reduce the size of the output.  The amount of skip is set by the stride keyword argument of the conv4 operation (the default stride is 1). In the following example we set stride to W such that the consecutive filter applications are non-overlapping:julia> y = conv4(w, x; padding=(1,0), stride=3)\n3×1×1×1 Array{Float64,4}: [4,22,32]Note that the output has the first, middle, and last values of the previous example, i.e. every third value is kept and the rest are skipped. In general if stride=S and padding=P, the size of the output will be:Y = 1 + leftlfloorfracX+2P-WSrightrfloor"
},

{
    "location": "cnn.html#conv_mode-1",
    "page": "Convolutional Neural Networks",
    "title": "Mode",
    "category": "section",
    "text": "The convolution operation we have used so far flips the convolution kernel before multiplying it with the input. To take our first 1-D convolution example withy_1 = x_1 w_W + x_2 w_W-1 + x_3 w_W-2 + ldots \ny_2 = x_2 w_W + x_3 w_W-1 + x_4 w_W-2 + ldots \nldotsWe could also perform a similar operation without kernel flipping:y_1 = x_1 w_1 + x_2 w_2 + x_3 w_3 + ldots \ny_2 = x_2 w_1 + x_3 w_2 + x_4 w_3 + ldots \nldotsThis variation is called cross-correlation. The two modes are specified in Knet by choosing one of the following as the value of the mode keyword:0 for convolution\n1 for cross-correlationThis option would be important if we were hand designing our filters. However the mode does not matter for CNNs where the filters are learnt from data, the CNN will simply learn an inverted version of the filter if necessary."
},

{
    "location": "cnn.html#conv_dims-1",
    "page": "Convolutional Neural Networks",
    "title": "More Dimensions",
    "category": "section",
    "text": "When the input x has multiple dimensions convolution is defined similarly. In particular the filter w has the same number of dimensions but typically smaller size. The convolution operation flips w in each dimension and slides it over x, calculating the sum of elementwise products at every step. The formulas we have given above relating the output size to the input and filter sizes, padding and stride parameters apply independently for each dimension.Knet supports 2D and 3D convolutions. The inputs and the filters have two extra dimensions at the end which means we use 4D and 5D arrays for 2D and 3D convolutions. Here is a 2D convolution example:julia> w = reshape([1.0:4.0...], (2,2,1,1))\n2×2×1×1 Array{Float64,4}:\n[:, :, 1, 1] =\n 1.0  3.0\n 2.0  4.0\njulia> x = reshape([1.0:9.0...], (3,3,1,1))\n3×3×1×1 Array{Float64,4}:\n[:, :, 1, 1] =\n 1.0  4.0  7.0\n 2.0  5.0  8.0\n 3.0  6.0  9.0\njulia> y = conv4(w, x)\n2×2×1×1 Array{Float64,4}:\n[:, :, 1, 1] =\n 23.0  53.0\n 33.0  63.0To see how this result comes about, note that when you flip w in both dimensions you get:4 2\n3 1Multiplying this elementwise with the upper left corner of x:1 4\n2 5and adding the results gives you the first entry 23.The padding and stride options work similarly in multiple dimensions and can be specified as tuples: padding=(1,2) means a padding width of 1 along the first dimension and 2 along the second dimension for a 2D convolution. You can use padding=1 as a shorthand for padding=(1,1)."
},

{
    "location": "cnn.html#conv_filters-1",
    "page": "Convolutional Neural Networks",
    "title": "Multiple filters",
    "category": "section",
    "text": "So far we have been ignoring the extra dimensions at the end of our convolution arrays. Now we are ready to put them to use. A D-dimensional input image is typically represented as a D+1 dimensional array with dimensions: X_1 ldots X_D C_x The first D dimensions X_1ldots X_D determine the spatial extent of the image. The last dimension C_x is the number of channels (aka slices, frames, maps, filters). The definition and number of channels is application dependent. We use C_x=3 for RGB images representing the intensity in three colors: red, green, and blue. For grayscale images we have a single channel, C_x=1. If you were developing a model for chess, we could have C_x=12, each channel representing the locations of a different piece type.In an actual CNN we do not typically hand-code the filters. Instead we tell the network: \"here are 1000 randomly initialized filters, you go ahead and turn them into patterns useful for my task.\" This means we usually work with banks of multiple filters simultaneously and GPUs have optimized operations for such filter banks. The dimensions of a typical filter bank are: W_1 ldots W_D C_x C_y The first D dimensions W_1ldots W_D determine the spatial extent of the filters. The next dimension C_x is the number of input channels, i.e. the number of filters from the previous layer, or the number of color channels of the input image. The last dimension C_y is the number of output channels, i.e. the number of filters in this layer.If we take an input of size X_1ldots X_DC_x and apply a filter bank of size W_1ldotsW_DC_xC_y using padding P_1ldotsP_D and stride S_1ldotsS_D the resulting array will have dimensions: W_1 ldots W_D C_x C_y  ast  X_1 ldots X_D C_x  \nRightarrow  Y_1 ldots Y_D C_y  \nmboxwhere  Y_i = 1 + leftlfloorfracX_i+2P_i-W_iS_irightrfloorAs an example let\'s start with an input image of 256x256 pixels and 3 RGB channels. We\'ll first apply 25 filters of size 5x5 and padding=2, then 50 filters of size 3x3 and padding=1, and finally 75 filters of size 3x3 and padding=1. Here are the dimensions we will get: 256 256 3  ast  5 5 3 25  Rightarrow  256 256 25  \n 256 256 25 ast  3 3 2550  Rightarrow  256 256 50  \n 256 256 50 ast  3 3 5075  Rightarrow  256 256 75 Note that the number of input channels of the input data and the filter bank always match. In other words, a filter covers only a small part of the spatial extent of the input but all of its channel depth."
},

{
    "location": "cnn.html#conv_instances-1",
    "page": "Convolutional Neural Networks",
    "title": "Multiple instances",
    "category": "section",
    "text": "In addition to processing multiple filters in parallel, we implement CNNs with minibatching, i.e. process multiple inputs in parallel to fully utilize GPUs. A minibatch of D-dimensional images is represented as a D+2 dimensional array: X_1 ldots X_D C_x N where C_x is the number of channels as before, and N is the number of images in a minibatch. The convolution implementation in Knet/CUDNN use D+2 dimensional arrays for both images and filters. We used 1 for the extra dimensions in our first examples, in effect using a single channel and a single image minibatch.If we apply a filter bank of size W_1 ldots W_D C_x C_y to the minibatch given above the output size would be: W_1 ldots W_D C_x C_y  ast  X_1 ldots X_D C_x N  \nRightarrow  Y_1 ldots Y_D C_y N  \nmboxwhere  Y_i = 1 + leftlfloorfracX_i+2P_i-W_iS_irightrfloorIf we used a minibatch size of 128 in the previous example with 256x256 images, the sizes would be: 256 256 3 128  ast  5 5 3 25  Rightarrow  256 256 25 128  \n 256 256 25 128 ast  3 3 2550  Rightarrow  256 256 50 128  \n 256 256 50 128 ast  3 3 5075  Rightarrow  256 256 75 128 basically adding an extra dimension of 128 at the end of each data array.By the way, the arrays in this particular example already exceed 5GB of storage, so you would want to use a smaller minibatch size if you had a K20 GPU with 4GB of RAM.Note: All the dimensions given above are for column-major languages like Julia. CUDNN uses row-major notation, so all the dimensions would be reversed, e.g. NC_xX_DldotsX_1."
},

{
    "location": "cnn.html#conv_matmul-1",
    "page": "Convolutional Neural Networks",
    "title": "Convolution vs matrix multiplication",
    "category": "section",
    "text": "Convolution can be turned into a matrix multiplication, where certain entries in the matrix are constrained to be the same. The motivation is to be able to use efficient algorithms for matrix multiplication in order to perform convolution. The drawback is the large amount of memory needed due to repeated entries or sparse representations.Here is a matrix implementation for our first convolution example w=1ldots 3x=1ldots 7wast x = 1016222834:(Image: image)In this example we repeated the entries of the filter on multiple rows of a sparse matrix with shifted positions. Alternatively we can repeat the entries of the input to place each local patch on a separate column of an input matrix:(Image: image)The first approach turns w into a Ytimes X sparse matrix, wheras the second turns x into a Wtimes Y dense matrix.For 2-D images, typically the second approach is used: the local patches of the image used by convolution are stretched out to columns of an input matrix, an operation commonly called im2col. Each convolutional filter is stretched out to rows of a filter matrix. After the matrix multiplication the resulting array is reshaped into the proper output dimensions. The following figure illustrates these operations on a small example:(Image: image)It is also possible to go in the other direction, i.e. implement matrix multiplication (i.e. a fully connected layer) in terms of convolution. This conversion is useful when we want to build a network that can be applied to inputs of different sizes: the matrix multiplication would fail, but the convolution will give us outputs of matching sizes. Consider a fully connected layer with a weight matrix W of size Ktimes D mapping a D-dimensional input vector x to a K-dimensional output vector y. We can consider each of the K rows of the W matrix a convolution filter. The following example shows how we can reshape the arrays and use convolution for matrix multiplication:julia> using Knet\njulia> x = reshape([1.0:3.0...], (3,1))\n3×1 Array{Float64,2}:\n 1.0\n 2.0\n 3.0\njulia> w = reshape([1.0:6.0...], (2,3))\n2×3 Array{Float64,2}:\n 1.0  3.0  5.0\n 2.0  4.0  6.0\njulia> y = w * x\n2×1 Array{Float64,2}:\n 22.0\n 28.0\njulia> x2 = reshape(x, (3,1,1,1))\n3×1×1×1 Array{Float64,4}:\n[:, :, 1, 1] =\n 1.0\n 2.0\n 3.0\njulia> w2 = reshape(Array(w)\', (3,1,1,2))\n3×1×1×2 Array{Float64,4}:\n[:, :, 1, 1] =\n 1.0\n 3.0\n 5.0\n[:, :, 1, 2] =\n 2.0\n 4.0\n 6.0\njulia> y2 = conv4(w2, x2; mode=1)\n1×1×2×1 Array{Float64,4}:\n[:, :, 1, 1] =\n 22.0\n[:, :, 2, 1] =\n 28.0In addition to computational concerns, these examples also show that a fully connected layer can emulate a convolutional layer given the right weights and vice versa, i.e. convolution does not get us any extra representational power. However it does get us representational and statistical efficiency, i.e. the functions we would like to approximate are often expressed with significantly fewer parameters using convolutional layers and thus require fewer examples to train."
},

{
    "location": "cnn.html#conv_backprop-1",
    "page": "Convolutional Neural Networks",
    "title": "Backpropagation",
    "category": "section",
    "text": "Convolution is a linear operation consisting of additions and multiplications, so its backward pass is not very complicated except for the indexing. Just like the backward pass for matrix multiplication can be expressed as another matrix multiplication, the backward pass for convolution (at least if we use stride=1) can be expressed as another convolution. We will derive the backward pass for a 1-D example using the cross-correlation mode (no kernel flipping) to keep things simple. We will denote the cross-correlation operation with star to distinguish it from convolution denoted with ast. Here are the individual entries of y=wstar x:y_1 = x_1 w_1 + x_2 w_2 + x_3 w_3 + ldots \ny_2 = x_2 w_1 + x_3 w_2 + x_4 w_3 + ldots \ny_3 = x_3 w_1 + x_4 w_2 + x_5 w_3 + ldots \nldotsAs you can see, because of weight sharing the same w entry is used in computing multiple y entries. This means a single w entry effects the objective function through multiple paths and these effects need to be added. Denoting partial Jpartial y_i as y_i for brevity we have:w_1 = x_1 y_1 + x_2 y_2 + ldots \nw_2 = x_2 y_1 + x_3 y_2 + ldots \nw_3 = x_3 y_1 + x_4 y_2 + ldots \nldots which can be recognized as another cross-correlation operation, this time between x and y. This allows us to write w=ystar x.Alternatively, we can use the equivalent matrix multiplication operation from the last section to derive the backward pass:(Image: image)If r is the matrix with repeated x entries in this picture, we have y=wr. Remember that the backward pass for matrix multiplication y=wr is w=yr^T:(Image: image)which can be recognized as the matrix multiplication equivalent of the cross correlation operation w=ystar x.Here is the gradient for the input:beginalign*\n x_1 = w_1 y_1 \n x_2 = w_2 y_1 + w_1 y_2 \n x_3 = w_3 y_1 + w_2 y_2 + w_1 y_3 \n ldots\nendalign*You can recognize this as a regular convolution between w and y with some zero padding.The following resources provide more detailed derivations of the backward pass for convolution:Goodfellow, I.   (2010).   Technical report: Multidimensional, downsampled convolution for   autoencoders. Technical report, Université de Montréal. 312.\nBouvrie, J.   (2006).   Notes on convolutional neural networks.\nUFLDL   tutorial   and   exercise   on CNNs."
},

{
    "location": "cnn.html#Pooling-1",
    "page": "Convolutional Neural Networks",
    "title": "Pooling",
    "category": "section",
    "text": "It is common practice to use pooling (aka subsampling) layers in between convolution operations in CNNs. Pooling looks at small windows of the input, and computes a single summary statistic, e.g. maximum or average, for each window. A pooling layer basically says: tell me whether this feature exists in a certain region of the image, I don\'t care exactly where. This makes the output of the layer invariant to small translations of the input. Pooling layers use large strides, typically as large as the window size, which reduces the size of their output.Like convolution, pooling slides a small window of a given size over the input optionally padded with zeros skipping stride pixels every step. In Knet by default there is no padding, the window size is 2, stride is equal to the window size and the pooling operation is max. These default settings reduce each dimension of the input to half the size."
},

{
    "location": "cnn.html#pool_1d-1",
    "page": "Convolutional Neural Networks",
    "title": "Pooling in 1-D",
    "category": "section",
    "text": "Here is a 1-D example:julia> x = reshape([1.0:6.0...], (6,1,1,1))\n6×1×1×1 Array{Float64,4}: [1,2,3,4,5,6]\njulia> pool(x)\n3×1×1×1 Array{Float64,4}: [2,4,6]With window size and stride equal to 2, pooling considers the input windows 12 34 56 and picks the maximum in each window."
},

{
    "location": "cnn.html#pool_window-1",
    "page": "Convolutional Neural Networks",
    "title": "Window",
    "category": "section",
    "text": "The default and most commonly used window size is 2, however other window sizes can be specified using the window keyword. For D-dimensional inputs the size can be specified using a D-tuple, e.g. window=(2,3) for 2-D, or a single number, e.g. window=3 which is shorthand for window=(3,3) in 2-D. Here is an example using a window size of 3 instead of the default 2:julia> x = reshape([1.0:6.0...], (6,1,1,1))\n6×1×1×1 Array{Float64,4}: [1,2,3,4,5,6]\njulia> pool(x; window=3)\n2×1×1×1 Array{Float64,4}: [3, 6]With a window and stride of 3 (the stride is equal to window size by default), pooling considers the input windows 123456, and writes the maximum of each window to the output. If the input size is X, and stride is equal to the window size W, the output will have Y=lfloor XWrfloor elements."
},

{
    "location": "cnn.html#pool_padding-1",
    "page": "Convolutional Neural Networks",
    "title": "Padding",
    "category": "section",
    "text": "The amount of zero padding is specified using the padding keyword argument just like convolution. Padding is 0 by default. For D-dimensional inputs padding can be specified as a tuple such as padding=(1,2), or a single number padding=1 which is shorthand for padding=(1,1) in 2-D. Here is a 1-D example:julia> x = reshape([1.0:6.0...], (6,1,1,1))\n6×1×1×1 Array{Float64,4}: [1,2,3,4,5,6]\n\njulia> pool(x; padding=(1,0))\n4×1×1×1 Array{Float64,4}: [1,3,5,6]In this example, window=stride=2 by default and the padding size is 1, so the input is treated as 01234560 and split into windows of 01234560 and the maximum of each window is written to the output.With padding size P, if the input size is X, and stride is equal to the window size W, the output will have Y=lfloor (X+2P)Wrfloor elements."
},

{
    "location": "cnn.html#pool_stride-1",
    "page": "Convolutional Neural Networks",
    "title": "Stride",
    "category": "section",
    "text": "The pooling stride is equal to the window size by default (as opposed to the convolution case, where it is 1 by default). This is most common in practice but other strides can be specified using tuples e.g. stride=(1,2) or numbers e.g. stride=1. Here is a 1-D example with a stride of 4 instead of the default 2:julia> x = reshape([1.0:10.0...], (10,1,1,1))\n10×1×1×1 Array{Float64,4}: [1,2,3,4,5,6,7,8,9,10]\n\njulia> pool(x; stride=4)\n4×1×1×1 Array{Float64,4}: [2, 6, 10]In general, when we have an input of size X and pool with window size W, padding P, and stride S, the size of the output will be:Y = 1 + leftlfloorfracX+2P-WSrightrfloor"
},

{
    "location": "cnn.html#pool_mode-1",
    "page": "Convolutional Neural Networks",
    "title": "Mode",
    "category": "section",
    "text": "There are three pooling operations defined by CUDNN used for summarizing each window:CUDNN_POOLING_MAX\nCUDNN_POOLING_AVERAGE_COUNT_INCLUDE_PADDING\nCUDNN_POOLING_AVERAGE_COUNT_EXCLUDE_PADDINGThese options can be specified as the value of the mode keyword argument to the pool operation. The default is 0 (max pooling) which we have been using so far. The last two compute averages, and differ in whether to include or exclude the padding zeros in these averages. mode should be 1 for averaging including padding, and 2 for averaging excluding padding. For example, with input x=123456, window=stride=2, and padding=1 we have the following outputs with the three options:mode=0 => [1,3,5,6]\nmode=1 => [0.5, 2.5, 4.5, 3.0]\nmode=2 => [1.0, 2.5, 4.5, 6.0]"
},

{
    "location": "cnn.html#pool_dims-1",
    "page": "Convolutional Neural Networks",
    "title": "More Dimensions",
    "category": "section",
    "text": "D-dimensional inputs are pooled with D-dimensional windows, the size of each output dimension given by the 1-D formulas above. Here is a 2-D example with default options, i.e. window=stride=(2,2), padding=(0,0), mode=max:julia> x = reshape([1.0:16.0...], (4,4,1,1))\n4×4×1×1 Array{Float64,4}:\n[:, :, 1, 1] =\n 1.0  5.0   9.0  13.0\n 2.0  6.0  10.0  14.0\n 3.0  7.0  11.0  15.0\n 4.0  8.0  12.0  16.0\n\njulia> pool(x)\n2×2×1×1 Array{Float64,4}:\n[:, :, 1, 1] =\n 6.0  14.0\n 8.0  16.0"
},

{
    "location": "cnn.html#pool_instances-1",
    "page": "Convolutional Neural Networks",
    "title": "Multiple channels and instances",
    "category": "section",
    "text": "As we saw in convolution, each data array has two extra dimensions in addition to the spatial dimensions:  X_1 ldots X_D C_x N  where C_x is the number of channels and N is the number of instances in a minibatch.When the number of channels is greater than 1, the pooling operation is performed independently on each channel, e.g. for each patch, the maximum/average in each channel is computed independently and copied to the output. Here is an example with two channels:julia> x = rand(4,4,2,1)\n4×4×2×1 Array{Float64,4}:\n[:, :, 1, 1] =\n 0.880221  0.738729  0.317231   0.990521\n 0.626842  0.562692  0.339969   0.92469\n 0.416676  0.403625  0.352799   0.46624\n 0.566254  0.634703  0.0632812  0.0857779\n\n[:, :, 2, 1] =\n 0.300799  0.407623   0.26275   0.767884\n 0.217025  0.0055375  0.623168  0.957374\n 0.154975  0.246693   0.769524  0.628197\n 0.259161  0.648074   0.333324  0.46305\n\njulia> pool(x)\n2×2×2×1 Array{Float64,4}:\n[:, :, 1, 1] =\n 0.880221  0.990521\n 0.634703  0.46624\n\n[:, :, 2, 1] =\n 0.407623  0.957374\n 0.648074  0.769524When the number of instances is greater than 1, i.e. we are using minibatches, the pooling operation similarly runs in parallel on all the instances:julia> x = rand(4,4,1,2)\n4×4×1×2 Array{Float64,4}:\n[:, :, 1, 1] =\n 0.155228  0.848345  0.629651  0.262436\n 0.729994  0.320431  0.466628  0.0293943\n 0.374592  0.662795  0.819015  0.974298\n 0.421283  0.83866   0.385306  0.36081\n\n[:, :, 1, 2] =\n 0.0562608  0.598084  0.0231604  0.232413\n 0.71073    0.411324  0.28688    0.287947\n 0.997445   0.618981  0.471971   0.684064\n 0.902232   0.570232  0.190876   0.339076\n\njulia> pool(x)\n2×2×1×2 Array{Float64,4}:\n[:, :, 1, 1] =\n 0.848345  0.629651\n 0.83866   0.974298\n\n[:, :, 1, 2] =\n 0.71073   0.287947\n 0.997445  0.684064"
},

{
    "location": "cnn.html#Normalization-1",
    "page": "Convolutional Neural Networks",
    "title": "Normalization",
    "category": "section",
    "text": "Draft...Karpathy says: \"Many types of normalization layers have been proposed for use in ConvNet architectures, sometimes with the intentions of implementing inhibition schemes observed in the biological brain. However, these layers have recently fallen out of favor because in practice their contribution has been shown to be minimal, if any.\" (http://cs231n.github.io/convolutional-networks/#norm) Batch normalization may be an exception, as it is used in modern architectures.Here are some references for normalization operations:Implementations:Alex Krizhevsky\'s cuda-convnet library API.   (https://code.google.com/archive/p/cuda-convnet/wikis/LayerParams.wiki#Localresponsenormalizationlayer(same_map))\nhttp://caffe.berkeleyvision.org/tutorial/layers.html\nhttp://lasagne.readthedocs.org/en/latest/modules/layers/normalization.htmlDivisive normalisation (DivN):S. Lyu and E. Simoncelli. Nonlinear image representation using   divisive normalization. In CVPR, pages 1–8, 2008.Local contrast normalization (LCN):N. Pinto, D. D. Cox, and J. J. DiCarlo. Why is real-world visual   object recognition hard? PLoS Computational Biology, 4(1), 2008.\nJarrett, Kevin, et al. \"What is the best multi-stage architecture   for object recognition?.\" Computer Vision, 2009 IEEE 12th   International Conference on. IEEE, 2009.   (http://yann.lecun.com/exdb/publis/pdf/jarrett-iccv-09.pdf)Local response normalization (LRN):Krizhevsky, Alex, Ilya Sutskever, and Geoffrey E. Hinton. \"Imagenet   classification with deep convolutional neural networks.\" Advances in   neural information processing systems. 2012.   (http://machinelearning.wustl.edu/mlpapers/paperfiles/NIPS20120534.pdf)Batch Normalization: This is more of an optimization topic.Ioffe, Sergey, and Christian Szegedy. \"Batch normalization:   Accelerating deep network training by reducing internal covariate   shift.\" arXiv preprint arXiv:1502.03167 (2015).   (http://arxiv.org/abs/1502.03167/)"
},

{
    "location": "cnn.html#Architectures-1",
    "page": "Convolutional Neural Networks",
    "title": "Architectures",
    "category": "section",
    "text": "We have seen a number of new operations: convolution, pooling, filters etc. How to best put these together to form a CNN is still an active area of research. In this section we summarize common patterns of usage in recent work based on (Karpathy, 2016).The operations in convolutional networks are usually ordered into   several layers of convolution-bias-activation-pooling sequences.   Note that the convolution-bias-activation sequence is an efficient   way to implement the common neural net function f(wx+b) for a   locally connected and weight sharing hidden layer.\nThe convolutional layers are typically followed by a number of fully   connected layers that end with a softmax layer for prediction (if we   are training for a classification problem).\nIt is preferrable to have multiple convolution layers with small   filter sizes rather than a single layer with a large filter size.   Consider three convolutional layers with a filter size of   3x3. The units in the top layer have receptive fields of   size 7x7. Compare this with a single layer with a filter   size of 7x7. The three layer architecture has two   advantages: The units in the single layer network is restricted to   linear decision boundaries, whereas the three layer network can be   more expressive. Second, if we assume C channels, the parameter   tensor for the single layer network has size 77CC whereas the   three layer network has three tensors of size 33CC i.e. a   smaller number of parameters. The one disadvantage of the three   layer network is the extra storage required to store the   intermediate results for backpropagation.\nThus common settings for convolution use 3x3 filters with   stride = padding = 1 (which incidentally preserves the input   size). The one exception may be a larger filter size used in the   first layer which is applied to the image pixels. This will save   memory when the input is at its largest, and linear functions may be   sufficient to express the low level features at this stage.\nThe pooling operation may not be present in every layer. Keep in   mind that pooling destroys information and having several   convolutional layers without pooling may allow more complex features   to be learnt. When pooling is present it is best to keep the window   size small to minimize information loss. The common settings for   pooling are window = stride = 2, padding = 0, which halves the   input size in each dimension.Beyond these general guidelines, you should look at the architectures used by successful models in the literature. Some examples are LeNet (LeCun et al. 1998), AlexNet (Krizhevsky et al. 2012), ZFNet (Zeiler and Fergus, 2013), GoogLeNet (Szegedy et al. 2014), VGGNet (Simonyan and Zisserman, 2014), and ResNet (He et al. 2015)."
},

{
    "location": "cnn.html#Exercises-1",
    "page": "Convolutional Neural Networks",
    "title": "Exercises",
    "category": "section",
    "text": "Design a filter that shifts a given image one pixel to right.\nDesign an image filter that has 0 output in regions of uniform   color, but nonzero output at edges where the color changes.\nIf your input consisted of two consecutive frames of video, how   would you detect motion using convolution?\nCan you implement matrix-vector multiplication in terms of   convolution? How about matrix-matrix multiplication? Do you need   reshape operations?\nCan you implement convolution in terms of matrix multiplication?\nCan you implement elementwise broadcasting multiplication in terms   of convolution?"
},

{
    "location": "cnn.html#References-1",
    "page": "Convolutional Neural Networks",
    "title": "References",
    "category": "section",
    "text": "Some of this chapter was based on the excellent lecture notes from:   http://cs231n.github.io/convolutional-networks\nChristopher Olah\'s blog has very good visual explanations (thanks to   Melike Softa for the reference):   http://colah.github.io/posts/2014-07-Conv-Nets-Modular\nUFLDL (or its old   version)   is an online tutorial with programming examples and explicit   gradient derivations covering   convolution,   pooling,   and   CNNs.\nHinton\'s video lecture and presentation at Coursera (Lec 5):   https://d396qusza40orc.cloudfront.net/neuralnets/lecture_slides/lec5.pdf\nFor a derivation of gradients see:   http://people.csail.mit.edu/jvb/papers/cnn_tutorial.pdf or   http://www.iro.umontreal.ca/~lisa/pointeurs/convolution.pdf\nThe CUDNN manual has more details about the convolution API:   https://developer.nvidia.com/cudnn\nhttp://deeplearning.net/tutorial/lenet.html\nhttp://www.denizyuret.com/2014/04/on-emergence-of-visual-cortex-receptive.html\nhttp://neuralnetworksanddeeplearning.com/chap6.html\nhttp://www.deeplearningbook.org/contents/convnets.html\nhttp://www.wildml.com/2015/11/understanding-convolutional-neural-networks-for-nlp\nhttp://scs.ryerson.ca/~aharley/vis/conv/ has a nice visualization   of an MNIST CNN. (Thanks to Fatih Ozhamaratli for the reference).\nhttp://josephpcohen.com/w/visualizing-cnn-architectures-side-by-side-with-mxnet   visualizing popular CNN architectures side by side with mxnet.\nhttp://cs231n.github.io/understanding-cnn visualizing what   convnets learn.\nhttps://arxiv.org/abs/1603.07285 A guide to convolution arithmetic   for deep learning\nReading (architectures): cs231n Architecture Slides\nReading (visualization): cs231n Visualization Slides, cs231n Visualization Notes, Distillpub visualization article, Yosinski blog, video, paper, repo"
},

{
    "location": "rnn.html#",
    "page": "Recurrent Neural Networks",
    "title": "Recurrent Neural Networks",
    "category": "page",
    "text": ""
},

{
    "location": "rnn.html#Recurrent-Neural-Networks-1",
    "page": "Recurrent Neural Networks",
    "title": "Recurrent Neural Networks",
    "category": "section",
    "text": ""
},

{
    "location": "rnn.html#Motivation-1",
    "page": "Recurrent Neural Networks",
    "title": "Motivation",
    "category": "section",
    "text": "Recurrent neural networks (RNNs) are typically used in sequence processing applications such as natural language processing and generation. Some specific examples include:Sequence classification: given a sequence input, produce a fixed sized output, e.g. determine the \"sentiment\" of a product review.\nSequence generation: given a fixed sized input, produce a sequence output, e.g. automatic image captioning.\nSequence tagging: given a sequence, produce a label for each token, e.g. part-of-speech tagging.\nSequence-to-sequence mapping: given a sequence, produce another, not necessarily parallel, sequence. e.g. machine translation, speech recognition.All feed-forward models we have seen so far (Linear, MLP, CNN) have a common limitation: They are memoryless, i.e. they apply the same computational steps to each instance without any memory of previous instances. Each output is obtained from the current input and model parameters using a fixed number of common operations:haty_t = f(x_tw)A model with no memory is difficult to apply to variable sized inputs and outputs with nontrivial dependencies.  Let us take sequence tagging as an example problem.  To apply a feed-forward model to a sequence, one option is to treat each token of the sequence as an individual input:(Image: image)Applying the same computation to each input token makes sense only if the different input-output pairs are IID (independent and identically distributed).  However the IID assumption is violated in typical sequence processing applications like language modeling and speech recognition where the output of one time step may depend on the inputs and outputs from other time steps.<!--\n[](TODO: Applying a fixed number of computational steps: why limiting?when a single layer is universal?  check the proofs.)  \n[](fixed size api from karpathy)\n-->Another option is to treat the whole sequence as a single input:(Image: image)The first problem with this approach is that the inputs are of varying length.  We could potentially address this issue using a convolutional architecture, and this is a viable alternative for sequence classification problems.  However we have a more serious problem with variable length outputs: The space of possible outputs grow exponentially with length and output tokens have possible dependencies between them.  Problems of this type are known as \"structured prediction\", see (Smith 2011) for a good introduction. It is not clear how to generate and score variable sized outputs in a single shot with a single feed-forward model.<!--\n[](convolutions for sequences: Potential research topic!)\n[](exponential output growth: Can we tie this to fixed number of computational steps?)\n-->Finally we can generate each output token separately, but take a fixed sized window around the corresponding input token to take into account more context:(Image: image)This is the approach taken by, e.g. n-gram language models, and Bengio\'s MLP language model.  The problem with this approach is that we don\'t know how large the window needs to be.  In fact different tokens may require different sized windows, e.g. long range dependencies between words in a sentence.  RNNs provide a more elegant solution.RNNs process the input sequence one token at a time.  However, each output is not only a function of the current input, but some internal state determined by previous time steps:langlehaty_th_trangle = f(x_twh_t-1)(Image: image)The state h_t can be thought of as analogous to a memory device storing variables in a computer program.  In fact, RNNs have been proven to be Turing complete machines (however see this and this for a discussion).  At each time step, the RNN processes the current input x_t using the \"program\" specified by parameters w and the internal \"variables\" specified by h_t-1.  The program stores new values in its internal variables with h_t and possibly produces an output haty_t.<!--\n[](turing completeness, program analogy, but first figure out universality of mlp vs turing completeness of rnn)\n[](parameter sharing perspective, goodfellow: compare with 1-D convolution.)\n[](simple examples with irnn: adding, mnist-by-pixel, lm, timit, do we have data?)\n[](other possible examples: postag, charner.)\n-->"
},

{
    "location": "rnn.html#Architectures-1",
    "page": "Recurrent Neural Networks",
    "title": "Architectures",
    "category": "section",
    "text": "Depending on the type of problem, we can deploy an RNNs with architectures other than the tagger architecture we saw above.  Some examples are:Sequence classification(Image: image)Sequence generation(Image: image)Sequence to sequence mapping models which combine the previous two architectures. The input sequence is processed by an encoder RNN (E), and the output sequence is generated by a decoder RNN (D). Information is passed from the encoder to the decoder through the initial hidden state, or an extra input, or an attention mechanism.(Image: image)<!--\n[](Modeling sequences: hinton)\n[](input to output sequence speech, synched, unsynched, when does output start/stop if unsynched ctc)\n[](predict next token lm)\n[](sequence classification)\n[](s2s models)\n[](Karpathy\'s graph is more clear)\n[](Hinton\'s providing input and teaching signals variations)\n[](graves book chap 2 has a classification, )\n[](Goodfellow 10.5 Seq->Tok, 10.9 Tok->Seq Tok=Initial and/or Tok=>Input, 10.3,4,10,11 SeqN->SeqN, Sec 10.4 S2S.)\n[](deeplearningbook 379 fig 10.3,4,5 has example design patterns)\n[](Models: hinton)\n[](memoryless models, bengios language model)\n[](start with a regular mlp converted to rnn like Goodfellow.)\n-->\n\n## RNN vs MLP\n\nFor comparison here is the code for MLP with one hidden layer vs. the\ncode for a comparable RNN. [](how about a linear rnn?)\njulia function mlp1(w,x)     h = tanh(w[1]x .+ w[2])     y = w[3]h .+ w[4]     return y endfunction rnn1(w,x,h)     h = tanh(w[1]vcat(x,h) .+ w[2])     y = w[3]h .+ w[4]     return (y,h) end\nNote two crucial differences: First, RNN takes `h`, the hidden state\nfrom the previous time step, in addition to the regular input\n`x`. Second, it returns the new value of `h` in addition to the\nregular output `y`.\n\n## Backpropagation through time\n\nRNNs can be trained using the same gradient based optimization\nalgorithms we use for feed-foward networks. This is best illustrated\nwith a picture of an RNN unrolled in time:\n\n![image](http://colah.github.io/posts/2015-08-Understanding-LSTMs/img/RNN-unrolled.png)\n([image source](http://colah.github.io/posts/2015-08-Understanding-LSTMs))\n\nThe picture on the left depicts an RNN influencing its own hidden\nstate A while computing its output h for a single time step.  The\nequivalent picture on the right shows each time step as a separate\ncolumn with its own input, state and output.  We need to keep in mind\nthat the *function* that goes from the input and the previous state to\nthe output and the next state is identical at each time step.  Viewed\nthis way, there are no cycles in the computation graph and we can\ntreat the RNN as just a multi-layer feed-forward net which (i) has as\nmany layers as time steps, (ii) has weights shared between different\nlayers, and (iii) may have multiple inputs and outputs received and\nproduced at individual layers.\n\nBackpropagation through time (BPTT) is the SGD algorithm applied to\nRNNs unrolled in time.  First, the RNN is run and its outputs are\ncollected for the whole sequence.  Then the losses for all outputs are\ncalculated and summed.  Finally the backward pass goes over the\ncomputational graph for the whole sequence, accumulating the gradients\nof each parameter coming from different time steps.\n\nIn practice, with Knet, all we have to do is to write a loss function\nthat computes the total loss for the whole sequence and use its\n`grad(f)` for training.  Here is an example for a sequence tagger:\njulia function rnnloss(param,state,inputs,outputs)     # inputs and outputs are sequences of the same length     sumloss = 0     for t in 1:length(inputs)         prediction,state = rnn1(param,inputs[t],state)         sumloss += crossentropyloss(prediction,outputs[t])     end     return sumloss endrnngrad = grad(rnnloss)"
},

{
    "location": "rnn.html#train-with-our-usual-SGD-procedure-1",
    "page": "Recurrent Neural Networks",
    "title": "train with our usual SGD procedure",
    "category": "section",
    "text": "\n[](Hinton 7b)\n[](Unfolding picture)\n\n## Vanishing and exploding gradients\n\nRNNs can be difficult to train because gradients passed back through\nmany layers may vanish or explode. To see why, let us first look at\nthe evolution of the hidden state during the forward pass of an\nRNN. We will ignore the input and the bias for simplicity:\njulia h[t+1] = tanh(Wh[t]) = tanh(Wtanh(W*h[t-1])) = ...\nNo matter how many layers we go through, the forward `h` values will\nremain in the `[-1,1]` range because of the squashing `tanh` function,\nno problems here.  However, look at what happens in the backward pass:\njulia dh[t] = W\' * (dh[t+1] .* f(h[t+1]))\nwhere `dh[t]` is the gradient of the loss with respect to `h[t]` and\n`f` is some elementwise function whose outputs are in the `[-1,1]`\nrange (in the case of `tanh`, `f(x)=(1+x)*(1-x)`). The important thing\nto notice is that the `dh` gradients keep getting multiplied by the\nsame matrix `W\'` over and over again as we move backward, and the\nbackward pass is linear, i.e. there is no squashing function.\n\nWhat happens if we keep multiplying a vector ``u`` with the same\nmatrix over and over again?  Suppose the matrix has an\neigendecomposition ``V\\Lambda V^{-1}``.  After n multiplications in\neffect we will have multiplied with ``V\\Lambda^n V^{-1}`` where\n``\\Lambda`` is a diagonal matrix of eigenvalues. The components of the\ngradient corresponding to eigenvalues greater than 1 will grow without\na bound and the components for eigenvalues less than 1 will shrink\ntowards zero. The gradient entries that grow without a bound\ndestabilize SGD, and the ones that shrink to zero pass no information\nabout the error back to the parameters.\n\nThere are several possible solutions to these problems:\n\n* Initialize the weights to avoid eigenvalues that are too large or\n  too small. Even initializing the weights from a model successfully\n  trained on some other task may help start them in the right regime.\n* Use gradient clipping: this is the practice of downscaling gradients\n  if their norm is above a certain threshold to help stabilize SGD.\n* Use better optimization algorithms: methods like Adam and Adagrad\n  adjust the learning rate for each parameter based on the history of\n  updates and may be less sensitive to vanishing and exploding\n  gradients.\n* Use RNN modules designed to preserve long range information: modules\n  such as LSTM and GRU are designed to help information flow better\n  across time steps and are detailed in the next section.  \n\n[](motivation: why do mlp rnns have a hard time learning? vanishing gradients relevant according to DL 10.7 are vanishing gradients only important for bptt? how does lstm solve them?)\n[](Hinton 7d: why bptt is difficult, back pass linear.)\n[](http://www.wildml.com/2015/10/recurrent-neural-network-tutorial-part-4-implementing-a-grulstm-rnn-with-python-and-theano/)\n[](This may have a different math explanation: http://www.wildml.com/2015/10/recurrent-neural-networks-tutorial-part-3-backpropagation-through-time-and-vanishing-gradients/)\n[](Adam and gclip DL 10.11)\n\n## LSTM and GRU\n\n[](lstm/gru: http://colah.github.io/posts/2015-08-Understanding-LSTMs/ DL 10.10)\n\nThe Long Short Term Memory (LSTM) and the Gated Recurrent Unit (GRU)\nare two of the modules designed as building blocks for RNNs to address\nvanishing gradients and better learn long term dependencies. These\nunits replace the simple `tanh` unit used in `rnn1`.\n\n... To be continued\n\njulia function lstm(weight,bias,hidden,cell,input)     gates   = hcat(input,hidden) * weight .+ bias     h       = size(hidden,2)     forget  = sigm(gates[:,1:h])     ingate  = sigm(gates[:,1+h:2h])     outgate = sigm(gates[:,1+2h:3h])     change  = tanh(gates[:,1+3h:end])     cell    = cell .* forget + ingate .* change     hidden  = outgate .* tanh(cell)     return (hidden,cell) end ```"
},

{
    "location": "rnn.html#Practical-issues-1",
    "page": "Recurrent Neural Networks",
    "title": "Practical issues",
    "category": "section",
    "text": "input and output (word Embedding and prediction) layers\ndecoding and generating: greedy, beam, stochastic.\nminibatching\n(Advanced topics)\n(multilayer DL 10.5)\n(bidirectional)\n(attention: http://distill.pub/2016/augmented-rnns/)\n(speech, handwriting, mt)\n(image captioning, vqa)\n(ntm, memory networks: (DL 10.12) http://distill.pub/2016/augmented-rnns/)\n(2D rnns: graves chap 8. DL end of 10.3.)\n(recursive nets? DL 10.6)\n(different length input/output sequences: graves a chapter 7 on ctc, chap 6 on hmm hybrids., olah and carter on adaptive computation time. DL 10.4 on s2s.)\n(comparison to LDS and HMM Hinton)\n(discussion of teacher forcing and its potential problems DL 10.2.1)\n(echo state networks DL 10.8 just fix the h->h weights.)\n(skip connections in time, leaky units DL 10.9)"
},

{
    "location": "rnn.html#Further-reading-1",
    "page": "Recurrent Neural Networks",
    "title": "Further reading",
    "category": "section",
    "text": "Karpathy 2015. The Unreasonable Effectiveness of Recurrent Neural Networks.\nOlah 2015. Understanding LSTMs.\nHinton 2012. RNN lecture slides.\nOlah and Carter 2016. Augmented RNNs.\nGoodfellow 2016. Deep Learning, Chapter 10. Sequence modeling: recurrent and recursive nets.\nGraves 2012., Supervised Sequence Labelling with Recurrent Neural Networks (textbook)\nBritz 2015. Recurrent neural networks tutorial.\nManning and Socher 2017. CS224n: Natural Language Processing with Deep Learning.\nWikipedia. Recurrent neural network.\nOrr 1999. RNN lecture notes.\nLe et al. 2015. A simple way to initialize recurrent networks of rectified linear units"
},

{
    "location": "rl.html#",
    "page": "Reinforcement Learning",
    "title": "Reinforcement Learning",
    "category": "page",
    "text": ""
},

{
    "location": "rl.html#Reinforcement-Learning-1",
    "page": "Reinforcement Learning",
    "title": "Reinforcement Learning",
    "category": "section",
    "text": ""
},

{
    "location": "rl.html#References-1",
    "page": "Reinforcement Learning",
    "title": "References",
    "category": "section",
    "text": "http://www0.cs.ucl.ac.uk/staff/d.silver/web/Teaching.html\nhttps://www.youtube.com/watch?v=2pWv7GOvuf0&list=PL7-jPKtc4r78-wCZcQn5IqyuWhBZ8fOxT\nhttp://videolectures.net/rldm2015_silver_reinforcement_learning/?q=david%20silver\nhttps://webdocs.cs.ualberta.ca/~sutton/book/the-book.html\nhttps://sites.ualberta.ca/~szepesva/RLBook.html\nhttp://banditalgs.com/print/\nhttp://karpathy.github.io/2016/05/31/rl/\nhttp://cs229.stanford.edu/notes/cs229-notes12.pdf\nhttp://cs.stanford.edu/people/karpathy/reinforcejs/index.html\nhttps://www.udacity.com/course/machine-learning-reinforcement-learning–ud820\nhttp://www.nature.com/nature/journal/v518/n7540/full/nature14236.html\nhttp://people.csail.mit.edu/regina/my_papers/TG15.pdf\nIn http://karpathy.github.io/2015/05/21/rnn-effectiveness: For   more about REINFORCE and more generally Reinforcement Learning and   policy gradient methods (which REINFORCE is a special case of) David   Silver\'s class, or one of Pieter Abbeel\'s classes. This is very much   ongoing work but these hard attention models have been explored, for   example, in Inferring Algorithmic Patterns with Stack-Augmented   Recurrent Nets, Reinforcement Learning Neural Turing Machines, and   Show Attend and Tell.\nIn http://www.deeplearningbook.org/contents/ml.html: Please see   Sutton and Barto (1998) or Bertsekasand Tsitsiklis (1996) for   information about reinforcement learning, and Mnih et al.(2013) for   the deep learning approach to reinforcement learning."
},

{
    "location": "opt.html#",
    "page": "Optimization",
    "title": "Optimization",
    "category": "page",
    "text": ""
},

{
    "location": "opt.html#Optimization-1",
    "page": "Optimization",
    "title": "Optimization",
    "category": "section",
    "text": ""
},

{
    "location": "opt.html#References-1",
    "page": "Optimization",
    "title": "References",
    "category": "section",
    "text": "http://videolectures.net/deeplearning2015_goodfellow_network_optimization/   (Ian Goodfellow\'s tutorial on neural network optimization at Deep   Learning Summer School 2015).\nhttp://int8.io/comparison-of-optimization-techniques-stochastic-gradient-descent-momentum-adagrad-and-adadelta   (implementation and comparison of popular methods)\nhttp://www.deeplearningbook.org/contents/numerical.html (basic   intro in 4.3)\nhttp://www.deeplearningbook.org/contents/optimization.html (8.1   generalization, 8.2 problems, 8.3 algorithms, 8.4 init, 8.5 adaptive   lr, 8.6 approx 2nd order, 8.7 meta)\nhttp://andrew.gibiansky.com/blog/machine-learning/gauss-newton-matrix/   (great posts on optimization)\nhttps://www.cs.cmu.edu/~quake-papers/painless-conjugate-gradient.pdf   (excellent tutorial on cg, gd, eigens etc)\nhttp://arxiv.org/abs/1412.6544 (Goodfellow paper)\nhttps://d396qusza40orc.cloudfront.net/neuralnets/lecture_slides/lec6.pdf   (hinton slides)\nhttps://d396qusza40orc.cloudfront.net/neuralnets/lecture_slides/lec8.pdf   (hinton slides)\nhttp://www.denizyuret.com/2015/03/alec-radfords-animations-for.html\nhttp://machinelearning.wustl.edu/mlpapers/paper_files/icml2010_Martens10.pdf\nhttp://arxiv.org/abs/1503.05671\nhttp://arxiv.org/abs/1412.1193\nhttp://www.springer.com/us/book/9780387303031 (nocedal and wright)\nhttp://www.nrbook.com (numerical recipes)\nhttps://maths-people.anu.edu.au/~brent/pub/pub011.html (without   derivatives)\nhttp://stanford.edu/~boyd/cvxbook/ (only convex optimization)"
},

{
    "location": "gen.html#",
    "page": "Generalization",
    "title": "Generalization",
    "category": "page",
    "text": ""
},

{
    "location": "gen.html#Generalization-1",
    "page": "Generalization",
    "title": "Generalization",
    "category": "section",
    "text": ""
},

{
    "location": "gen.html#References-1",
    "page": "Generalization",
    "title": "References",
    "category": "section",
    "text": "http://www.deeplearningbook.org/contents/regularization.html\nhttps://d396qusza40orc.cloudfront.net/neuralnets/lecture_slides/lec9.pdf\nhttps://d396qusza40orc.cloudfront.net/neuralnets/lecture_slides/lec10.pdf\nhttp://blog.cambridgecoding.com/2016/03/24/misleading-modelling-overfitting-cross-validation-and-the-bias-variance-trade-off/"
},

]}
