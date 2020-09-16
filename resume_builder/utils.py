from io import BytesIO
from django.http import HttpResponse
from django.template.loader import get_template
from .models import EndUser

from xhtml2pdf import pisa


def render_to_pdf(template_src, context_dict={}):
    template = get_template(template_src)
    html = template.render(context_dict)
    result = BytesIO()
    pdf = pisa.pisaDocument(BytesIO(html.encode("ISO-8859-1")), result)
    if not pdf.err:
        return HttpResponse(result.getvalue(), content_type='application/pdf')
    return None


def get_end_user(user, device_id):
    if user.is_authenticated:
        end_user = EndUser.objects.get_or_create(
            user=user)[0]  # removes the tuple
    else:
        end_user = EndUser.objects.get_or_create(device_id=device_id)[
            0]  # removes the tuple

    return end_user
