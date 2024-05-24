$(document).ready(function() {
    let markdownContent = '';

    function generateMarkdown() {
        const title = $('#codeTitle').val();
        const description = $('#codedescription').val();
        const snippet = $('#codeSnippet').val();
        if (!title || !description || !snippet) {
            alert('Please fill in all fields.');
            return;
        }

        markdownContent = `# ${title}\n\n${description}\n\n\`\`\`\n${snippet}\n\`\`\``;

        $('#markdownPreview').text(markdownContent);
    }

    function downloadMarkdown() {
        const fileName = $('#fileName').val() || 'code_snippet';
        const blob = new Blob([markdownContent], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = $('<a/>', {
            href: url,
            download: `${fileName}.md`
        }).appendTo('body');
        a[0].click();
        a.remove();
    }

    $('.btn').click(generateMarkdown);
    $('.btn-download').click(downloadMarkdown);
});