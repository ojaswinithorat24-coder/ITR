Day 32

Today, I focused on the data preparation phase of the RAG project. Since the quality of responses depends heavily on the quality of the stored knowledge, my mentor explained how data is collected from different sources before being used by the AI model. I learned that information can be extracted from websites, PDF documents, reports, and other official resources.

I observed how Python libraries such as BeautifulSoup are used to scrape website content, while PDF processing libraries extract text from documents. However, the extracted data cannot be used directly. Therefore, preprocessing is performed to remove unnecessary symbols, formatting issues, duplicate content, and irrelevant information. This process ensures that only clean and meaningful text is stored in the knowledge base.

After preprocessing, I learned about text chunking. Instead of storing an entire document as one large block, the content is divided into smaller chunks. My mentor explained that smaller chunks improve retrieval accuracy because the system can locate the most relevant information more effectively. I also understood the importance of metadata, which stores details such as the document source, page number, and title to improve traceability.

Towards the end of the day, I reviewed the processed data and observed how it is prepared before generating embeddings. This session gave me a practical understanding of why data quality plays a significant role in the overall performance of a RAG application.

Learning Outcome:

Learned data extraction from websites and PDF documents.
Understood preprocessing techniques for text cleaning.
Studied text chunking and metadata generation.
Realized the importance of high-quality data in AI systems.